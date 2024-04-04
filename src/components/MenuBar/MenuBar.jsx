import * as React from 'react'; // Importing necessary components and modules from React
import Drawer from '@mui/material/Drawer'; // Importing Drawer component from MUI library
import Button from '@mui/material/Button'; // Importing Button component from MUI library
import MenuIcon from '@mui/icons-material/Menu'; // Importing MenuIcon component from MUI library
import Sidebar from '../Sidebar'; // Importing Sidebar component
import ListContext from '../../utils/ListContext'; // Importing ListContext for accessing context
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // Importing ArrowBackIosNewIcon component from MUI library

// Define the MenuBar component
export default function MenuBar() {
  // Using React.useState to manage the open state of the drawer
  const [open, setOpen] = React.useState(false);

  // Toggles the open state of the drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Using React.useContext to access context values from ListContext
  const { selectedTrack } = React.useContext(ListContext);

  // Return JSX representing the MenuBar component
  return (
    <div>
      {/* Button to toggle the drawer */}
      <Button onClick={toggleDrawer(true)}><MenuIcon sx={{ color: "white" }} /></Button>
      {/* Drawer component */}
      <Drawer 
        open={open} // Controls the open state of the drawer
        onClose={toggleDrawer(false)} // Closes the drawer when clicking outside
        PaperProps={{ style: { width: "100%", background: " linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%)" } }} // Styling for the paper of the drawer
      >
        {/* Back button to close the drawer */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "15px 15px 0 0" }}>
          <ArrowBackIosNewIcon onClick={toggleDrawer(false)} sx={{ color: "white", fontSize: "25px" }} />
        </div>
        {/* Sidebar component inside the drawer */}
        <Sidebar />
      </Drawer>
    </div>
  );
}
