import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [navigation] = useState([
    {
      name: "About Me"
    },
    {
      name: "Projects"
    },
    {
      name: "Contact Me"
    },
    {
      name: "Resume"
    }
  ]);

  const [currentNav, setCurrentNav] = useState(navigation[0]);

  return (
    <>
      <Header
        navigation={navigation}
        setCurrentNav={setCurrentNav}
        currentNav={currentNav}
      ></Header>
      <main>
        {/* <About></About> */}
        {/* <Project></Project> */}
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
