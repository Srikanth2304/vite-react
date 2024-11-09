function Header(){
    const name = "Srikanth Bankuru";
    const profession = "Software Engineer";
    return(
        <header className='header'>
          <h1>{name}</h1>
          <h3>{profession}</h3>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
      </header>
    );
}

export default Header;