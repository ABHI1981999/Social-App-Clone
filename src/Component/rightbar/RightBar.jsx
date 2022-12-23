import React from 'react'
import "./RightBar.css"
import {Posts, Users} from "../../dummyData"


export default function RightBar() {
  return (
    <div className='RightContainer'>
      <div className="rightWrapper">
        <div className="BirthDayReminder">
          <img className='BirthdayImg' src="assets/Gift.jpg" alt="" />
          <span className='BirthDayText'><b>Raman</b> and <b>3 other friends</b> have a Birthday today</span>
        </div>
        <div className="RightSideAd">
          <img className='Advertisement' src="assets/Ad.jpg" alt="" />
        </div>
        <div className="Title">Online Friends</div>
        <div className="onlineFriends">
          <ul className="friendList">
            <li>
              <div className="friend">
                {/* <img className='friendImg' src="assets/profile_friend.jpg" alt="" /> */}
                <img className='friendImg' src={Users[1].profilePicture} alt="" />
                <span className='onlineBadge'></span>
                <span className='friendName'>Alexander</span>
              </div>
            </li>
            <li>
              <div className="friend">
                <img className='friendImg' src="assets/profile_friend.jpg" alt="" />
                <span className='onlineBadge'></span>
                <span className='friendName'>Alexander</span>
              </div>
            </li>
            <li>
              <div className="friend">
                <img className='friendImg' src="assets/profile_friend.jpg" alt="" />
                <span className='onlineBadge'></span>
                <span className='friendName'>Alexander</span>
              </div>
            </li>
            <li>
              <div className="friend">
                <img className='friendImg' src="assets/profile_friend.jpg" alt="" />
                <span className='onlineBadge'></span>
                <span className='friendName'>Alexander</span>
              </div>
            </li>
            <li>
              <div className="friend">
                <img className='friendImg' src="assets/profile_friend.jpg" alt="" />
                <span className='onlineBadge'></span>
                <span className='friendName'>Alexander</span>
              </div>
            </li>
            <li>
              <div className="friend">
                <img className='friendImg' src="assets/profile_friend.jpg" alt="" />
                <span className='onlineBadge'></span>
                <span className='friendName'>Alexander</span>
              </div>
            </li>
            <li>
              <div className="friend">
                <img className='friendImg' src="assets/profile_friend.jpg" alt="" />
                <span className='onlineBadge'></span>
                <span className='friendName'>Alexander</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> 
  )
}
