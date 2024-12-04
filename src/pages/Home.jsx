import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderRef = useRef(null);

  const sections = [
    {
      title: " Portfolio 🩻 ",
      description: "Explore my creative works and professional achievements.",
      link: "/portfolio",
    },
    {
      title: " Cooking 🍳",
      description: "Dive into my love for culinary arts and creative recipes.",
      link: "/cooking",
    },
    {
      title: " Gaming🎮 ",
      description: "Discover my passion for gaming and Decisive Strategy.",
      link: "/gaming",
    },
    {
      title: " Running 🏃🏿💨",
      description: "Learn about my fitness journey and running challenges.",
      link: "/running",
    },
    {
      title: " Skating 🛼🛼",
      description: "Join me at the RINK where creativity is endless.",
      link: "/skating",
    },
    {
      title: " Locked-In 💡",
      description: "See how I bring my dedication and drive to the workplace.",
      link: "/working",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      // Save the slide index to localStorage 
      localStorage.setItem('currentSlide', next);
    },
  };

  useEffect(() => {
    const savedSlide = localStorage.getItem('currentSlide');
    if (savedSlide) {
      sliderRef.current.slickGoTo(Number(savedSlide)); 
    }
  }, []);

  const styles = {
    home: {
      textAlign: 'center',
      padding: '60px',
    },
    carousel: {
      margin: '70px auto',
      width: '70%',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    navigationButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '30px',
      backgroundColor: '#007bff',
      color: '#fff',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.home}>
      <h1>Welcome to the Sound Track of my LIFE</h1>
      <h2>
        Discover my music, explore my journey, and listen to tracks that showcase my passion for SOUND, CREATIVITY, and FLOW.
      </h2>
      <h2>
        Navigate through Pillars of who I am to better understand the sounds that engulf my creative nature and potential growth.
      </h2>
      <h2>Stay Awhile and ENJOY!</h2>

      <div style={styles.carousel}>
        <Slider ref={sliderRef} {...settings}>
          {sections.map((section, index) => (
            <div key={index} style={styles.card}>
              <h4>{section.title}</h4>
              <p>{section.description}</p>
              <a href={section.link}>Explore ~ {section.title}</a>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div style={styles.navigationButtons}>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            onClick={() => sliderRef.current.slickPrev()}
          >
            ..retreat 
          </button>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            onClick={() => sliderRef.current.slickNext()}
          >
            ONWARD!
          </button>
        </div>
      </div>
      <div>
        <a href="/portfolio" id='Portfolio'><img src="https://cdn3.emoji.gg/emojis/80401-musicalhearts.gif" width="80px" height="55px" alt="MusicalHearts"/><img src="https://cdn3.emoji.gg/emojis/7830-felix-acidcat.gif" width="90px" height="90px" alt="felix_acidcat"/></a>
        <Tooltip 
        anchorSelect = '#Portfolio'
        content = 'Portfolio' />
      </div>
    </div>
  );
};

export default Home;
