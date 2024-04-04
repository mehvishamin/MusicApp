import React from 'react'; // Importing necessary components and modules from React
import "./navigation.css"; // Importing CSS file for styling
import { useContext } from 'react'; // Importing useContext hook from React
import ListContext from '../../utils/ListContext'; // Importing ListContext for accessing context

// Define the Navigation component
const Navigation = () => {
  // Destructuring context values from ListContext
  const {
    selectedTab,
    setSelectedTab,
    recentlyPlayed,
    songsList,
    setSearchSong
  } = useContext(ListContext);

  // Array containing menu items for the navigation
  const menuItems = ["For You", "Top Tracks", "Favourites", "Recently Played"];

  // Function to handle menu item click
  const handleClick = ((item) => {
    
    setSelectedTab(item); // Set the selected tab
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
  });

  // Return JSX representing the Navigation component
  return (
    <>
      <div className='navigation-container'>
        <img className='logo' height="100px" width="100px" src='logo.svg' alt="Logo" />
        <div>
          {/* Mapping through menuItems array and rendering menu items */}
          {menuItems.map((item) => {
            return (
              <div className='menu-item' key={item}> {/* Use item as key since it's unique */}
                <p onClick={() => { handleClick(item) }} style={{ opacity: selectedTab === item ? 1 : 0.6 }}>{item}</p> {/* Call handleClick function on click */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// Exporting the Navigation component as the default export
export default Navigation;
