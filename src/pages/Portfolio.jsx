import React from 'react';
import Slider from 'react-slick';
import '../Portfolio.css';
import AudioPlayer from 'react-h5-audio-player';
import { Tooltip } from 'react-tooltip';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-h5-audio-player/lib/styles.css';

const Portfolio = () => {
  // Sample music data
  const tracks = [
    {
      title: 'Pokemon Heat Remix: Dj Suede',
      src: 'public/music/PokemonHeatRemix.mp3',
    },
    {
      title: 'Flo Rider/ Gorillaz: Oneboredjeu',
      src: 'public/music/FloGoodInc.mp3',
    },
    {
      title: 'Bee Gees/ Dr. Dre & Snoop: Dj erb',
      src: 'public/music/Dre-SnoopRemix.mp3',
    },
  ];
 // Carousel data
  const sections = [
  { title: 'Professional READ-ME GENERATOR', description: 'Generator that will prompt users to create a Customized READ-ME for their upcoming projects', 
      link: "https://github.com/keenanmaupin/Professional-Readme-Gen" },
  { title: 'Specialized React Portfolio', description: 'Portfolio generated through only using vite and React', 
      link: "https://neon-mochi-31d1d2.netlify.app/ " },
  { title: 'Stress Management Webpage', description: 'A webpage that allows users to create and track their stress as both an outlet and a local storage history tracker for the users to reflect on past challenge and tribulations.',
      link: 'https://github.com/larimae/stress-management' },
  { title: ' Frontend_person(s)_search', description: 'The application demonstrates how I was able to correct a Canidate search application code structure that was unable to utalize a GitHub TOKEN to access the servers site to pull data. ',
      link: 'https://frontend-person-s-search-1.onrender.com/' },
];

const sliderRef = React.useRef(null);

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const styles = {
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    margin: '10px',
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
  return (
    <Container fluid className="portfolio">
      <h2 className="text-center mb-4">Portfolio</h2>
      <Row>
        {/* Music Section */}
        <Col md={6}>
          <h3>Music Showcase</h3>
          <p>
            "I am a passionate, creative, and dedicated artist who believes every project has its own unique identity. My goal is to help you discover and bring that individuality to life."
          </p>
          <p>Jump in and vibe out to some of my favorite tracks below—let the beats move you!</p>
          <div className="track-list">
            {tracks.map((track, index) => (
              <div key={index} className="track mb-3">
                <h4>{track.title}</h4>
                <AudioPlayer src={track.src} />
              </div>
            ))}
          </div>
          <br></br>
        </Col>
        <hr></hr>
        <hr></hr>
         {/* Carousel Section */}
          <Col md={6}>
          <h3>Featured Projects Carousel</h3>
          <Slider ref={sliderRef} {...settings}>
            {sections.map((section, index) => (
              <div key={index} style={styles.card}>
                <h4>{section.title}</h4>
                <p>{section.description}</p>
                <a href={section.link}>Explore ~ {section.title}</a>
              </div>
            ))}
          </Slider>
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
        </Col>
      </Row>
      <br></br>

      <hr></hr>
      <a href="/" id="Home-Page">
            <img
              src="https://cdn3.emoji.gg/emojis/45625-vinylrecord.gif"
              width="64px"
              height="64px"
              alt="VinylRecord"
            />
          </a>
          <Tooltip anchorSelect="#Home-Page" content="Home-Page" />
    </Container>
  );
};

export default Portfolio;
