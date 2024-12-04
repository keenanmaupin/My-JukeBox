
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Tooltip } from 'react-tooltip';
import 'react-h5-audio-player/lib/styles.css';

const Gaming = () => {
  // Sample music data
  const tracks = [
    {
      title: 'Happeir: Marshmello ft. Bastille',
      src: 'public/music/Happier.mp3',
    },
    {
      title: 'Sunflower: Post Malone',
      src: 'public/music/sunflower.mp3',
    },
    {
      title: 'ENEMY: Imagine Dragons ft JID',
      src: 'public/music/ENEMY.mp3',
      
    },
    {
      title: 'All Star: Smash Mouth',
      src: 'public/music/All-Star.mp3',
      
    },
    {
      title: 'Ms.Jackson: Outkast',
      src: 'public/music/Ms.Jackson.mp3',
      
    },
  ];

  return (
    <div className="Gaming">
      <h1>Experience the rush of Gaming with me:</h1>
      <p>"It's been a long night, and we're riding a five-game back-to-back winning streak. Now's 
      the time to sit-up and lock-in because we can't ease up against our enemies now, its to late for all that. So gear up and reload, or top off that mana gauge, 
      because it's Game Time baby!"</p>
      <p>Dive into this mixtape because the next rounds about to start!:</p>
      <div className="track-list">
        {tracks.map((track, index) => (
          <div key={index} className="track">
            <h3>{track.title}</h3>
            <AudioPlayer src={track.src} />
          </div>
        ))}
      </div>

      <hr></hr>

      <a href="/" id = 'Home-Page'><img src="https://cdn3.emoji.gg/emojis/45625-vinylrecord.gif" width="64px" height="64px" alt="VinylRecord"/></a>
      <Tooltip 
        anchorSelect = '#Home-Page'
        content = 'Home-Page' />
    </div>
  );
};

export default Gaming;
