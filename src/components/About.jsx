function About(){
    const name = "Srikanth Bankuru";
    const profession = "Software Engineer";
    return(
        <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>
          I am a {name} , passinate {profession} with 2 years of experience. I have worked on various technologies like React, Angular, Node.js, and MongoDB.
        </p>
      </section>
    );
}
export default About;