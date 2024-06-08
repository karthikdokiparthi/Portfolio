import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Mywork from './Components/Mywork';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Mywork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
