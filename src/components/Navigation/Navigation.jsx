import React, { useState } from 'react'
import Drawer from './Drawer';
import Navbar from './Navbar';


const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }

  return (
      <>
        <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Navbar toggleDrawer={toggleDrawer} />
      </>
  );
}

export default Navigation
