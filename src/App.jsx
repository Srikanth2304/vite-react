import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <header className='header'>
          <h1>{name}</h1>
          <h3>{profession}</h3>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
      </header>

      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>
          I am a {name} , passinate {profession} with 2 years of experience. I have worked on various technologies like React, Angular, Node.js, and MongoDB.
        </p>
      </section>
      {/* Project section */}
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project , index) => (
            <div className='project-item' key={index}>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link}>View project</a>
              </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <h2>Contact me</h2>
        <p>if you like to get in touch , feel free to email me at {<a href='emailto:srikanthbankuru2304@gmail.com'>srikanthbankuru2304</a>}</p>
      </section>

      <footer className='footer'>
          <p>All rights are reserved @2025</p>
          <h4>Bankuru Pvt.Ltd</h4>
      </footer>
    </div>
    
  )
}

export default App
