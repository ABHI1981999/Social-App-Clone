import React from 'react'
import "./Topbar.css"
import { FaSearch,FaUserAlt,FaFacebookMessenger,FaBell } from 'react-icons/fa';


export default function Topbar() {
  return (
    <div className='topbar'>

{/* Left Part */}

      <div className="topbarleft">
        <span className='Logo'>Social-App</span>
      </div>

{/* Center Part */}

      <div className="topbarcenter">
        <div className="searchbar">
        {/* <div className="searchlogo">S</div> */}
        <FaSearch className="searchlogo"/>
        <input type="text" className='searchinput' placeholder='Search for name or account'/>
        </div>
      </div>

{/* Right Part */}

      <div className="topbarright">
        <div className="links">
          <span className="topbarlink">HomePage</span>
          <span className="topbarlink">TimeLine</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <FaUserAlt className='Iconlogo'/>
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className="topbarIconItem">
          <FaFacebookMessenger className='Iconlogo'/>
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className="topbarIconItem">
          <FaBell className='Iconlogo'/>
            <span className='topbarIconBadge'>3</span>
          </div>
        </div>
      </div>

{/* Profile Image */}

    <img src="/assets/profile_for_react.jpg" alt="" className='ProfileImg'/>
    </div>
  )
}
