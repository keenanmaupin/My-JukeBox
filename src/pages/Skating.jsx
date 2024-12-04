
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Tooltip } from 'react-tooltip';
import 'react-h5-audio-player/lib/styles.css';

const Skating = () => {
  // Sample music data
  const tracks = [
    {
      title: 'Candy: Cameo',
      src: 'public/music/candy.mp3',
    },
    {
      title: 'Midas Touch: Midnight Star',
      src: 'public/music/MidasTouch.mp3',
    },
    {
      title: 'Brick House: Commodores',
      src: 'public/music/BrickHouse.mp3',
    },
    {
      title: 'Love Come Down: Evelyn King',
      src: 'public/music/LoveComeDown.mp3',
    },
    {
      title: 'Dont Stop Till You Get Enough: Michael Jackson',
      src: 'public/music/DontStopTilYouGetEnough.mp3',
    },
  ];

  return (
    <div className="Skating">
      <h1>Get ready to vibe to some funky beats that'll have you groovin with the Classics!:</h1>
      <p>The beat only gets heavier, If you don't know you better ask Somebody!:</p>
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
      <br></br>
      <a href="/" id = 'Home=Page'><img src="https://cdn3.emoji.gg/emojis/45625-vinylrecord.gif" width="64px" height="64px" alt="VinylRecord"/></a>
      <Tooltip 
        anchorSelect = '#Home-Page'
        content = 'Home-Page' />
    </div>
  );
};

export default Skating;
