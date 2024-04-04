import React, { useContext } from 'react'; // Importing necessary components and modules from React
import "./players.css"; // Importing CSS file for styling
import AudioVPlayer from '../AudioPlayer/AudioVPlayer'; // Importing AudioVPlayer component
import ListContext from '../../utils/ListContext'; // Importing ListContext for accessing context
import MenuBar from '../MenuBar/MenuBar'; // Importing MenuBar component

// Define the Players component
const Players = () => {
  // Destructuring context values from ListContext
  const { selectedTrack} = useContext(ListContext);

  // Return JSX representing the Players component
  return (
    <div className='players-container'>
      <div className='menubar-container'>
        <MenuBar /> {/* Render MenuBar component */}
      </div>
      <div className='item-container'>
        <div className='top-container'>
          {/* Display song name and artist */}
          <span className='text'>{selectedTrack?.song}</span>
          <span className='subtitle-text'>{selectedTrack?.artist}</span>
        </div>
        <div className="body-container">
          {/* Display song image */}
          <img style={{ width: "100%", height: "330px", objectFit: "cover" }} src={selectedTrack?.image} alt="Song Image" />
        </div>
        <div className='bottom-container'>
          {/* Render AudioVPlayer component */}
          <AudioVPlayer selectedTrack={selectedTrack} />
        </div>
      </div>
    </div>
  );
}

// Exporting the Players component as the default export
export default Players;
