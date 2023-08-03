import React from "react";
import "./SideBar.css";
import logo1 from "../../images/logo1.jpg";
import { FaHome, FaFilm, FaTv, FaStar, FaList, FaThumbsUp, FaHeart, FaHandPointUp, FaCog, FaUserPlus, FaArrowRight, FaArrowLeft } from "react-icons/fa";


import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate

const SideBar = () => {

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleSignOut = () => {
    // Perform any sign-out actions here if needed
    navigate("/login"); // Navigate to the login page after signing out
  
  };
  const handleHome = () => {
   
    navigate("/"); // Navigate to the login page after signing out
  
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-avatar">
        <img src={logo1} alt="logo" />
      </div>
      <div className="sidebar">
        <ul>
          <li className="icon-with-text"  onClick={handleHome}>
            <FaHome /> Home
          </li>
          <li className="icon-with-text">
            <FaFilm />
            Movies
          </li>
          <li className="icon-with-text">
            <FaTv /> Shows
          </li>
          <li className="icon-with-text">
            <FaStar /> Rated
          </li>
          <li className="icon-with-text">
            <FaList /> Genre
          </li>
          <li className="icon-with-text">
            <FaList /> Playlist
          </li>
        </ul>

        <ul>
          <li className="icon-with-text">
            <FaThumbsUp /> Likes
          </li>
          <li className="icon-with-text">
            <FaHeart /> Favourite
          </li>
          <li className="icon-with-text">
            <FaHandPointUp /> For You
          </li>
        </ul>

        <ul>
          <li className="icon-with-text">
            <FaCog /> Setting
          </li>
          <li className="icon-with-text">
            <FaUserPlus /> Member
          </li>
          <button className="btn2" onClick={handleSignOut}>
            <FaArrowRight />
            Sign Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;




