import './App.css';
import Header from './components/Header';
import About from './components/About';
// import Project from './components/Project';
import Footer from './components/Footer';
// import { useState } from 'react';

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <About></About>
        {/* <Project></Project> */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
