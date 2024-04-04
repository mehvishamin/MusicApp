import React, { useContext, useEffect } from 'react'; // Importing necessary components and modules from React
import "./sidebar.css"; // Importing CSS file for styling
import { Avatar } from '@mui/material'; // Importing Avatar component from MUI library
import SidebarMobile from '../SidebarMobile/SidebarMobile'; // Importing SidebarMobile component
import ListContext from '../../utils/ListContext'; // Importing ListContext for accessing context

// Define the Sidebar component
const Sidebar = () => {
  // Destructuring context values from ListContext
  const {
    songsList,
    selectedTab,
    setSelectedTab,
    setRecentlyPlayed,
    selectedTrack,
    setSelectedTrack,
    searchSong,
    setSearchSong
  } = useContext(ListContext);

  // Function to handle selecting a track
  const handleSelectTrack = ((e, song) => {
    e.preventDefault();
    setSelectedTrack(song); // Set the selected track
    setRecentlyPlayed(prevRecentlyPlayed => {
      // Remove the selected song from recently played if it's already there
      let updatedRecentlyPlayed = prevRecentlyPlayed.filter(item => item !== song);
      updatedRecentlyPlayed.unshift(song); // Push the selected song at the zeroth index
      updatedRecentlyPlayed = updatedRecentlyPlayed.slice(0, 7); // Keep only the first 7 elements
      
      return updatedRecentlyPlayed; // Return the updated recently played list
    });
  });

  // Effect hook to update searchSong when songsList changes
  useEffect(() => {
    setSearchSong(songsList);
  }, [songsList]);

  // Function to handle input change for searching songs or artists
  const handleChange = ((e) => {
    setSearchSong(songsList.filter((f) => f?.song?.toLowerCase().includes(e.target.value?.toLowerCase()) || f?.artist?.toLowerCase().includes(e.target.value?.toLowerCase())));
  });

  // Return JSX representing the Sidebar component
  return (
    <div className='sidebar-container'> 
      <div className='sidebar-mobile'>
        <img className='logo' height="50px" width="100px" src='logo.svg' alt="Logo" />
        <SidebarMobile selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <p>{selectedTab}</p>
      <input type='search' placeholder='Search Song,Artist' onChange={(e) => { handleChange(e) }} />
      <div className='music-container'>
        {/* Mapping through searchSong array and rendering music items */}
        {searchSong?.map((song) => {
          return (
            <div
              key={song.id} // Use song id as key since it's unique
              style={{ background: selectedTrack?.id === song.id ? "rgba(255, 255, 255, 0.08)" : "" }} // Apply background color if the song is selected
              className='list-container'
              onClick={(e) => { handleSelectTrack(e, song) }} // Call handleSelectTrack function on click
            >
              <div className='avatar-container'>
                <Avatar
                  sx={{ height: "48px", width: "48px", marginRight: "10px" }}
                  alt="Avatar"
                  src={song.image} // Display song image
                />
                <div className='name-container'>
                  <span className='title-container'>{song.song}</span> {/* Display song name */}
                  <span className='subtitle'>{song.artist}</span> {/* Display artist name */}
                </div>
              </div>
              <div className='duration-container'>{song.duration}</div> {/* Display song duration */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Exporting the Sidebar component as the default export
export default Sidebar;
