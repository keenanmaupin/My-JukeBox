import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Cooking from './pages/Cooking.jsx';
import Skating from './pages/Skating.jsx';
import Gaming from './pages/Gaming.jsx';
import Running from './pages/Running.jsx';
import Working from './pages/Working.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './pages/Navbar.jsx'; 
import './Contact.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <main className="main-content">
          <div className="card-container">
            <Routes>
              <Route path="/" element={<Card><Home /></Card>} />
              <Route path="/about" element={<Card><About /></Card>} />
              <Route path="/portfolio" element={<Card><Portfolio /></Card>} />
              <Route path="/cooking" element={<Card><Cooking /></Card>} />
              <Route path="/skating" element={<Card><Skating /></Card>} />
              <Route path="/gaming" element={<Card><Gaming /></Card>} />
              <Route path="/running" element={<Card><Running /></Card>} />
              <Route path="/working" element={<Card><Working /></Card>} />
              <Route path="/contact" element={<Card><Contact /></Card>} />
              <Route path="*" element={<Card>Page Not Found</Card>} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>
            &copy; 2024 "Don't Be Shy, Stop On By"
            <p>
              <a href="https://github.com/keenanmaupin" id='Github'>
              <Tooltip 
              anchorSelect = '#Github'
              content = 'Github' />
                <img src="https://cdn3.emoji.gg/emojis/41304-kittyspin.gif" width="64px" height="64px" alt="kittyspin" />
              </a>
              <a href="https://www.linkedin.com/in/keenan-maupin-84b14a333/" id='Linked-In'>
              <Tooltip 
              anchorSelect = '#Linked-In'
              content = 'Linked-In' />
                <img src="https://cdn3.emoji.gg/emojis/31907-linkedin.png" width="64px" height="64px" alt="LinkedIn" />
              </a>
              <a href="https://docs.google.com/document/d/1Qf551Z1_pcMoOuwCqUF3eRydXBBAeGGgs0HQdfbZlvc/edit?usp=sharing" id='Resume-G-Drive'>
              <Tooltip 
              anchorSelect = '#Resume-G-Drive'
              content = 'Resume-G-Drive' />
                <img src="https://cdn3.emoji.gg/emojis/3185-minecraftfire.gif" width="64px" height="64px" alt="Minecraftfire" />
              </a>
            </p>
            <hr />
          </p>
        </footer>
      </div>
    </Router>
  );
}

// Card Component
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default App;
