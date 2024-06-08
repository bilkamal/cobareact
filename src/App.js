import React from "react";
import './App.css';

function App(){
    return(
        <div className="App">
        <header className="App-header">
          <h1>My React</h1>
        </header>
        <main>
            <section id="about">
                <h2>About Me</h2>
                <p>Testing bruh</p>
            </section>
            <section id="projects">
                <h2>projects</h2>
                <div className="project">
                    <h3>Project 1</h3>
                    <p>Project 1 make me</p>
                </div>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>Email: youremail@example.com</p>
            </section>
        </main>
      </div>        
    );
}
export default App;