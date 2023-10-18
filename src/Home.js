import React from 'react';
import imageSrc from './profile.jpg';

function Home() {
  return (
    <div className="home">
     <img className="profile"src={imageSrc} alt="Image Alt Text" />
      <h1 className="neon-text">Welcome to My Portfolio</h1>
      <br/>
      <div className="skill-cards">
        <div className="skill-card">
          <h2>Web Development</h2>
          <p>HTML, CSS, JavaScript, React, etc.</p>
        </div>
        <div className="skill-card">
          <h2>Graphic Design</h2>
          <p>Photoshop, Illustrator, InDesign, etc.</p>
        </div>
        <div className="skill-card">
          <h2>UI/UX Design</h2>
          <p>Wireframing, Prototyping, User Research, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
