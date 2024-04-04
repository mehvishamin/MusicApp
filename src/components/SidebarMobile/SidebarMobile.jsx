import { Chip, Stack } from '@mui/material'; // Importing necessary components from MUI library
import React, { useContext } from 'react'; // Importing necessary components and modules from React
import ListContext from '../../utils/ListContext'; // Importing ListContext for accessing context

// Define the SidebarMobile component
const SidebarMobile = () => {
  // Destructuring context values from ListContext
  const {
    selectedTab,
    setSelectedTab,
     songsList,
    setSearchSong,
    recentlyPlayed
  } = useContext(ListContext);

  // Array containing menu items for the sidebar
  const menuItems = ["For You", "Top Tracks", "Favourites", "Recently Played"];

  // Function to handle menu item click
  const handleClick = (item) => {
  
    setSelectedTab(item); // Set the selected tab to the clicked item
    // Based on the clicked item, update the searchSong state accordingly
    if (item === "Top Tracks") {
      setSearchSong(songsList?.filter((f) => f.rating > 4)); // Filter songsList based on rating
    } else if (item === "Favourites") {
      setSearchSong(songsList?.filter((f) => f.favourite === true)); // Filter songsList based on favourites
    } else if (item === "Recently Played") {
      setSearchSong(recentlyPlayed); // Set searchSong to recentlyPlayed
    } else {
      setSearchSong(songsList); // Set searchSong to the full songsList
    }
  };

  // Return JSX representing the SidebarMobile component
  return (
    <Stack direction="row" spacing={1}>
      {/* Mapping through menu items and rendering Chip component for each item */}
      {menuItems.map((item) => {
        return (
          <Chip
            key={item} // Use item as key since it's unique
            size="small"
            onClick={() => { handleClick(item) }} // Call handleClick function on click
            label={item}
            color={selectedTab === item ? "success" : "primary"} // Set color based on selected tab
          />
        );
      })}
    </Stack>
  );
}

// Exporting the SidebarMobile component as the default export
export default SidebarMobile;
