import React from "react";
import "./SideBar.css";
import logo from "../../images/logo.jpg";
import { FaHome } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-avatar">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar">
        <ul>
          <li className="icon-with-text">
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
          <button className="btn2">
            <FaArrowRight />
            Sign Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
