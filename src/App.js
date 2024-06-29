import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import MyNavBar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import  Footer  from './components/Footer';
import About from './components/About';

function App() {
  return (
   <>
   <div className="App">
    < MyNavBar />
    <Banner />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   </div>
   </>
  );
}

export default App;
