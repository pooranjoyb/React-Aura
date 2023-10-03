import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCaretRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  // Function to open the sidebar
  const openSidebar = () => {
    setIsSidebarHidden(false);
  };

  const sidebarStyle = {
    width: isSidebarHidden ? '16px' : '256px', // Adjust the width as needed
  };

  return (
    <div style={sidebarStyle} className="bg-[#E6EDFF] text-black h-screen transition-all duration-300 relative">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">
          <FontAwesomeIcon icon={faCube} className="mr-2 mt-14" />
          Components
        </h2>
      </div>
      <nav>
        <ul className="space-y-2 p-4">
          <li>
            <a href="#" className="block hover:bg-blue-200 rounded p-2">
              <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
              Buttons
            </a>
          </li>
          <li>
            <a href="#" className="block hover:bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               Cards
             </a>
           </li>
           <li>
             <a href="#" className="block hover:bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               Footer
             </a>
           </li>
           <li>
             <a href="#" className="block hover-bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               Inputs
             </a>
           </li>
           <li>
             <a href="#" className="block hover-bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               Modals
             </a>
           </li>
           <li>
             <a href="#" className="block hover-bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               Navbars
             </a>
           </li>
           <li>
             <a href="#" className="block hover-bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               Pagination
             </a>
           </li>
           <li>
             <a href="#" className="block hover-bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               ProgressBar
             </a>
           </li>
           <li>
             <a href="#" className="block hover-bg-blue-200 rounded p-2">
               <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
               Toastify
             </a>
           </li>
          {/* ... other list items */}
        </ul>
      </nav>

      {/* Hamburger menu button for opening the sidebar */}
      <button
        className="absolute top-0 left-0 m-4 mb-8 text-blue-500 hover:text-blue-700" // Added margin-bottom
        onClick={openSidebar} // Open the sidebar when clicked
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* Collapse button inside the sidebar */}
      {!isSidebarHidden && (
        <button
          className="absolute top-0 right-0 m-4 text-blue-500 hover:text-blue-700"
          onClick={toggleSidebar} // Toggle the sidebar when clicked
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;