import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (    
    <div className='navBar'>
      <div className='nav-item'>
        <Link to="/">Home</Link>
      </div>
      <div className='nav-item'>
        <Link to="/history">History</Link>
      </div>
    </div>
  )
}

export default Navbar;