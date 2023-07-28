import React from 'react'
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className='sidebar-wrapper'>
            <div className='sidebar-avatar'>
                <p>logo ne</p>
                <p>ten</p>
            </div>
            <div className='sidebar'>
                <ul>
                    <li><i class="fas fa-home"></i> Home</li>
                    <li><i class="fas fa-film"></i> Movies</li>
                    <li><i class="fas fa-tv"></i> Shows</li>
                    <li><i class="fas fa-star"></i> Rated</li>
                    <li><i class="fas fa-list"></i> Genre</li>
                    <li><i class="fas fa-list-alt"></i> Playlist</li>
                </ul>

                <ul>
                    <li><i class="fas fa-thumbs-up"></i> Likes</li>
                    <li><i class="fas fa-heart"></i> Favourite</li>
                    <li><i class="fas fa-user"></i> For You</li>
                </ul>

                <ul>
                    <li><i class="fas fa-cog"></i> Setting</li>
                    <li><i class="fas fa-user-plus"></i> Membership</li>
                    <button class="btn2">Sign Out</button>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
