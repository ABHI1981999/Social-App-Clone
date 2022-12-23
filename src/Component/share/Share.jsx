import React from 'react'
import "./Share.css"
import { FaPhotoVideo,FaTag,FaMapMarkerAlt,FaLaugh } from 'react-icons/fa';

export default function Share() {
  return (
    <div className='ShareContainer'>
    <div className="sharewrapper">
        <div className="sharethought">
            <img src="/assets/profile_for_react.jpg" alt="" className='ShareImg'/>
            <input type= "text" className='Thoughts' placeholder="What's in your mind ?" />
        </div>
        <hr className='sharehr'/>
        <div className="shareoptions">
            <div className="shareoption">
                <div className="shareIcon"><FaPhotoVideo className='photo'/></div>
                <span className='ShareText'>Photo or Video</span>
            </div>
            <div className="shareoption">
                <span className="shareIcon"><FaTag className='tag'/></span>
                <span className='ShareText'>Tag</span>
            </div>
            <div className="shareoption">
                <span className="shareIcon"><FaMapMarkerAlt className='location'/></span>
                <span className='ShareText'>Location</span>
            </div>
            <div className="shareoption">
                <span className="shareIcon"><FaLaugh className='feeling'/></span>
                <span className='ShareText'>Feelings</span>
            </div>
        <button className='shareButton'>Share</button>
        </div>
        </div>
    </div>
  )
}
