
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Tooltip } from 'react-tooltip';
import 'react-h5-audio-player/lib/styles.css';
const Cooking= () => {
  // Sample music data
  const tracks = [
    {
      title: 'Married Life: (From Disney animation Up)',
      src: 'public/music/married-life.mp3',
    },
    {
      title: 'Le Festin: Camille',
      src: 'public/music/Le-Festin.mp3',
    },
    {
      title: 'Take Five: Paul Desmond',
      src: 'public/music/Take-Five.mp3',
    },
    {
      title: '3005: Childish Gambino',
      src: 'public/music/3005.mp3',
    },
    {
      title: 'DAY N NIGHT: Kid CuDi',
      src: 'public/music/DAY-N-NIGHT.mp3',
    },
  ];

  return (
    <div className="Cooking">
      <h1>When the Chef is doing what he does best:</h1>
      <p>
      "Who knows where our journey will take us: Savoring crispy fried lumpia in the Philippines
        or whipping up a rich five-cheese baked mac from the deep South. Either way, we're in for a delicious feast tonight!"</p>
      <p>Explore and listen to some of my favorite tracks below:</p>
      <div className="track-list">
        {tracks.map((track, index) => (
          <div key={index} className="track">
            <h3>{track.title}</h3>
            <AudioPlayer src={track.src} />
          </div>
        ))}
      </div>
      <br></br>
      <hr></hr>
      <a href="/" id="Home-Page"><img src="https://cdn3.emoji.gg/emojis/45625-vinylrecord.gif" width="64px" height="64px" alt="VinylRecord"/></a>
      <Tooltip 
        anchorSelect = '#Home-Page'
        content = 'Home-Page' />
    </div>
  );
};

export default Cooking;
