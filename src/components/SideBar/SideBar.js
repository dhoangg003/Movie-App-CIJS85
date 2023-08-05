import React from "react";
import "./SideBar.css";
import logo1 from "../../images/logo1.jpg";
import {
  FaHome,
  FaFilm,
  FaTv,
  FaStar,
  FaList,
  FaThumbsUp,
  FaHeart,
  FaHandPointUp,
  FaCog,
  FaUserPlus,
  FaArrowRight,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ signOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleSetting = () => {
    navigate("/settings");
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-avatar">
        <img src={logo1} alt="logo" />
      </div>
      <div className="sidebar">
        <ul>
          <li className="icon-with-text" onClick={handleHome}>
            <FaHome /> Home
          </li>
          <li className="icon-with-text">
            <FaFilm />
            Movies
          </li>
          <li className="icon-with-text">
            <FaTv /> Shows
          </li>
        </ul>
        <ul>
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
            <Link to="/favorite">
              <FaHeart /> Favourite
            </Link>
          </li>
          <li className="icon-with-text">
            <FaHandPointUp /> For You
          </li>
        </ul>

        <ul>
          <li className="icon-with-text" onClick={handleSetting}>
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
