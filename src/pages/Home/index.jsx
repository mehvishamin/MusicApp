import React, { useContext, useEffect } from 'react'; // Importing necessary components and modules from React
import Navigation from '../../components/Navigation'; // Importing the Navigation component
import { fetchMusic } from "../../module/Music"; // Importing fetchMusic function from Music module
import "./home.css"; // Importing CSS file for styling
import Sidebar from '../../components/Sidebar'; // Importing the Sidebar component
import Players from '../../components/Players'; // Importing the Players component
import "./gradients.css"; // Importing CSS file for gradient styling
import ListContext from '../../utils/ListContext'; // Importing ListContext for accessing context

// Define the Home component
const Home = () => {
  // Destructuring context values from ListContext
  const {
    selectedTrack,
    setSelectedTrack,
    songsList,
    setSongsList
  } = useContext(ListContext);

  // useEffect hook to fetch music data and set songsList and selectedTrack when component mounts
  useEffect(() => {
    fetchMusic()
      .then((response) => {
      
        setSongsList(response.data); // Set the songs list with the response data
        setSelectedTrack(response.data[0]); // Set the selected track to the first track in the response data
      });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // Return JSX representing the Home component
  return (
    <div className={`home-container gradient-background${selectedTrack?.id}`}>
      {/* Navigation component */}
      <div className='navigation'>
        <Navigation />
      </div>
      {/* Sidebar component */}
      <div className='sidebar'>
        <Sidebar selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} songsList={songsList} setSongsList={setSongsList} />
      </div>
      {/* Players component */}
      <div className='players'>
        <Players selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} />
      </div>
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
