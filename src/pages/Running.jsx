
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Tooltip } from 'react-tooltip';
import 'react-h5-audio-player/lib/styles.css';

const Running = () => {
  // Sample music data
  const tracks = [
    {
      title: 'So Good: Paster Mike Jr.',
      src: 'public/music/so-good.mp3',
    },
    {
      title: 'BUZZIN: Mann',
      src: 'public/music/BUZZIN.mp3',
    },
    {
      title: 'The Way You Move: Outkast',
      src: 'public/music/TheWayYouMove.mp3',
    },
    {
      title: 'P.Y.T: Michael Jackson',
      src: 'public/music/P.Y.T.mp3',
    },
    {
      title: 'Never To Much: Luther Vandross',
      src: 'public/music/NeverToMuch.mp3',
    },
  ];

  return (
    <div className="Running">
      <h1>Fuel Your Run with My Ultimate Playlist, Just make sure you stretch first..fare warnning:</h1>
      <p>Check out some of my favorite tracks below that'll have your legs pushing harder than you ever thought possible!:</p>
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
      <a href="/" id = 'Home=Page'><img src="https://cdn3.emoji.gg/emojis/45625-vinylrecord.gif" width="64px" height="64px" alt="VinylRecord"/></a>
      <Tooltip 
        anchorSelect = '#Home-Page'
        content = 'Home-Page' />
    </div>
  );
};

export default Running;
