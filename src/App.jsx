import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
      const name = "Srikanth Bankuru";
      const profession = "Software Engineer";
      const projects = [
        {
          title: "Project 1",
          description: "Description 1",
          link:"https://www.google.com"
        },
        {
          title: "Project 2",
          description: "Description 2",
          link:"https://www.google.com"
        }
      ]
  return (
    <div className='APP'>
      {/* Header section */}
      <Header/>

      {/* About Section */}
      <About/>
      {/* Project section */}
      <Project/>

      {/* Contact Section */}
      <Contact/>
        {/* Footer Section */}
      <Footer/>
    </div>
    
  )
}

export default App
