// Import necessary components and modules from React and react-router-dom
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Importing the Home component
import "./app.css"; // Importing CSS file for styling

// Importing ListContext which presumably provides context for lists
import ListContext from "./utils/ListContext";

// Define the main App component
function App() {
  // Define state variables using React.useState
  const [songsList, setSongsList] = React.useState([]); // State variable for songs list
  const [searchSong, setSearchSong] = React.useState(songsList); // State variable for searched song
  const [recentlyPlayed, setRecentlyPlayed] = React.useState([]); // State variable for recently played songs
  const [selectedTab, setSelectedTab] = React.useState("For You"); // State variable for selected tab
  const [selectedTrack, setSelectedTrack] = React.useState(); // State variable for selected track

  return (
    // Providing context to the components using ListContext.Provider
    <ListContext.Provider
      value={{
        selectedTab: selectedTab,
        setSelectedTab: setSelectedTab,
        selectedTrack: selectedTrack,
        setSelectedTrack: setSelectedTrack,
        songsList: songsList,
        setSongsList: setSongsList,
        searchSong: searchSong,
        setSearchSong: setSearchSong,
        recentlyPlayed: recentlyPlayed,
        setRecentlyPlayed: setRecentlyPlayed,
      }}
    >
      {/* Using BrowserRouter to provide routing functionality */}
      <BrowserRouter>
        <Routes>
          {/* Defining routes */}
          {/* Home component is rendered when the path is '/' */}
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );
}

// Exporting the App component as the default export
export default App;
