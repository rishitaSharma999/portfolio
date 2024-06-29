import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/profile-pic.jpeg";
import CV from "../assets/Resume.pdf"




export const Banner=()=>{
    const [loopNum, setLoopNum]=useState(0) /* used to set the loop number */
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate=["Web Devoloper", "Web Designer", "UI/UX Designer"]
     const[text,setText]=useState('');
     const [delta,setDelta]=useState(300- Math.random() *100);
     const period=2000;
     const [index, setIndex] = useState(1);

     useEffect(()=>{
        const ticker=setInterval(()=>{
            tick();
        },delta)

        return()=>{clearInterval(ticker)};
     },[text])

     const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updatedText=isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)

        setText(updatedText);

        if(isDeleting){// if it is deleting then the pace would be different
           setDelta(prevDelta=> prevDelta/2)
        }
        
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period)
        }
        else if(isDeleting && updatedText===''){
            setIsDeleting(false)
            setLoopNum(loopNum+1);
            setDelta(500); 
        }
        else {
         setIndex(prevIndex => prevIndex + 1);
       }
     }


    return (
       <section className="banner" id="home">
         <Container>
            <Row className="align-item-center">
              
              <Col xs={12} md={6} xl={6}>
              <div className="lala">
                <img src={headerImg} alt="Header Img"></img>  
              </div>
              
              </Col>
              <Col xs={12} md={6} xl={6}>
              <span className="tagline">Rishita Sharma</span>
              {/* <h1>{`Hi I'm webcoded `} <span className="wrap">{text}</span> </h1> */}
              <p>Currently pursuing B.Tech in Computer Science from Shri G.S. Institute of Technology and Science, graduating in 2026. Enthusiastic and passionate coder with an interest in exploring the Web Development field and improving my problem-solving skills. </p>
               <button onClick={()=>console.log("connect")}><a href={CV} download="Rishita_Sharma_CV.pdf"  className="download-link">Download CV</a> < ArrowRightCircle size={25} /></button>
              </Col>
            </Row>
         </Container>
       </section>
    )
}

export default Banner; 