
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Tooltip } from 'react-tooltip';
import 'react-h5-audio-player/lib/styles.css';

const Working = () => {
  // Sample music data
  const tracks = [
    {
      title: 'Tast Of Honey: Paul Desmond',
      src: 'public/music/TasteOfHoney.mp3',
    },
    {
      title: 'You Will Be In My Heart: Jeff Kaale (Disney LOFI)',
      src: 'public/music/YouWillBeInMyHeart.mp3',
    },
    {
      title: 'Kingdom Hearts Menu Theme: ',
      src: 'public/music/KingdomHeartsOSTMenuTheme.mp3',
    },
    {
      title: 'Misty Mountains: Geoff C.',
      src: 'public/music/MistyMountains.mp3',
    },
    {
      title: 'Samuri Champloo: (LOFI) Shiki No Uta',
      src: 'public/music/SamuraiChamploo(SHikiNoUta).mp3',
    },
  ];

  return (
    <div className="Working">
      <h1>Experience the sounds while I work through Trials:</h1>
      <p>Behold, my chosen tracks below—melodies that strengthen my Spirit and prepare me to triumph over every challenge set before me!</p>
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

export default Working;
