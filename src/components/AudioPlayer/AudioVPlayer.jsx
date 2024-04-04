import { useContext } from 'react'; // Importing useContext hook from React
import AudioPlayer from 'react-h5-audio-player'; // Importing AudioPlayer component from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'; // Importing styles for AudioPlayer component
import ListContext from "../../utils/ListContext"; // Importing ListContext for accessing context

// Define the AudioVPlayer component
const AudioVPlayer = () => {
  // Using useContext hook to access context values from ListContext
  const { searchSong, selectedTrack, setSelectedTrack, setRecentlyPlayed } = useContext(ListContext);

  // Function to handle audio ended event
  const handleEnded = () => {
    // Find the index of the current selected track in the searchSong array
    const currentIndexInList = searchSong.findIndex(song => song.id === selectedTrack.id);
    // Calculate the index of the next track to play
    const nextIndex = (currentIndexInList + 1) % searchSong.length;
    // Set the selected track to the next track
    setSelectedTrack(searchSong[nextIndex]);
    
    // Update the recently played list
    setRecentlyPlayed(prevRecentlyPlayed => {
      // Remove the current selected track from recently played if it's already there
      let updatedRecentlyPlayed = prevRecentlyPlayed.filter(item => item !== selectedTrack);
      // Push the selected song at the zeroth index
      updatedRecentlyPlayed.unshift(selectedTrack);
      // Keep only the first 7 elements
      updatedRecentlyPlayed = updatedRecentlyPlayed.slice(0, 7);
      return updatedRecentlyPlayed; // Return the updated recently played list
    });
  };

  // Return JSX representing the AudioVPlayer component
  return (
    <AudioPlayer
      autoPlay // Auto play audio
      style={{ backgroundColor: "black" }} // Style for the player
      src={selectedTrack?.link} // Source of the audio
      onPlay={e => console.log("onPlay")} // Function to handle play event
      autoPlayAfterSrcChange // Auto play after source change
      onEnded={handleEnded} // Function to handle ended event
    />
  );
};

// Exporting the AudioVPlayer component as the default export
export default AudioVPlayer;
