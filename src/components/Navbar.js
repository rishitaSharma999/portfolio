import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/LeetCode_avatar.png';
import { useState, useEffect } from "react";
 export const MyNavBar=()=> {
  const [activeLink, setActiveLink] = useState("home"); // to check which link is active
  const [scrolled, setScrolled] = useState(false); // keep the information of whether use scrolled and therefore change the background

  // thsi would trigger the effect when the user has scrolled
  useEffect(() => {
    // function that determines what happens when we scroll
    const onScroll = () => {
      // if the scroll is more than height of our banner then we trigger setScrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // EVENT LISTENER WHICH WOULD BE FIRED WHEN WE SCROLL
    window.addEventListener("scroll", onScroll);

    // WE ALSO HAVE TO REMOVE IT WHEN COMPONENET GETS REMOVED FROM DOM(When a web page is loaded, the browser creates a Document Object Model of the page.
    //The HTML DOM model is constructed as a tree of Objects:)
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  {/* The useEffect hook is used to add an event listener to the window object to detect when the user scrolls down the page. When the user scrolls down, the scrolled state variable is updated to true. The event listener is removed when the component is unmounted. */}

  const onUpdateActiveLink=(value)=>{
       setActiveLink(value)
  }
  return (
    <>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}> {/* we added scrolled in the className if scroll happens */}
      <Container>
        <Navbar.Brand href="/">
        {/* <img  className="logo-image" src={logo} alt="Logo" />*/}
        Rishita
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link key="home" href="#home" className={activeLink==='home'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link> {/* we added the active link  and also called function that updated the activeLink */}
            <Nav.Link key="about" href="#about" className={activeLink==='about'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('about')} >About</Nav.Link>
            <Nav.Link key="skills" href="#skills" className={activeLink==='skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link key="projects" href="#projects" className={activeLink==='projects'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rishita-sharma-842400215/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/rishitaSharma999">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://leetcode.com/u/x-rishita-x/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                console.log("connect");
              }}
            >
              <span> <Nav.Link key="connect" href="#connect" className={activeLink==='connect'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('connect')} >Let's Connect</Nav.Link></span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavBar;
