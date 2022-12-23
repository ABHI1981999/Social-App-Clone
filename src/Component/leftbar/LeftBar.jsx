import React from 'react'
import "./LeftBar.css"
import { FaPlayCircle,FaRss,FaRocketchat,FaUsers,FaBookmark,FaQuestionCircle,FaBriefcase,FaCalendarDay,FaGraduationCap } from 'react-icons/fa';

export default function LeftBar() {
  return (
    <>
    <div className="LeftContainer">
        <div className="leftwrapper">
            <ul className='leftList'>
                <li className='leftListItem'>
                    <FaRss className='leftlistIcon'/>
                    <span className='leftListItemName'>Feed</span>
                </li>
                <li className='leftListItem'>
                    <FaRocketchat className='leftlistIcon'/>
                    <span className='leftListItemName'>Chats</span>
                </li>
                <li className='leftListItem'>
                    <FaPlayCircle className='leftlistIcon'/>
                    <span className='leftListItemName'>Videos</span>
                </li>
                <li className='leftListItem'>
                    <FaUsers className='leftlistIcon'/>
                    <span className='leftListItemName'>Groups</span>
                </li>
                <li className='leftListItem'>
                    <FaBookmark className='leftlistIcon'/>
                    <span className='leftListItemName'>BookMarks</span>
                </li>
                <li className='leftListItem'>
                    <FaQuestionCircle className='leftlistIcon'/>
                    <span className='leftListItemName'>Questions</span>
                </li>
                <li className='leftListItem'>
                    <FaBriefcase className='leftlistIcon'/>
                    <span className='leftListItemName'>Jobs</span>
                </li>
                <li className='leftListItem'>
                    <FaCalendarDay className='leftlistIcon'/>
                    <span className='leftListItemName'>Events</span>
                </li>
                <li className='leftListItem'>
                    <FaGraduationCap className='leftlistIcon'/>
                    <span className='leftListItemName'>Courses</span>
                </li>
            </ul>
            <button className='leftBarListButton'>Show More</button>
            <hr className='leftBarhr' />
            <ul className='FriendList'>
                <li className='FriendListItem'>
                    <img className='FriendImg' src="/assets/profile_friend.jpg" alt="" />
                    <span className="FriendName">Aman</span>
                </li>
                <li className='FriendListItem'>
                    <img className='FriendImg' src="/assets/profile_friend.jpg" alt="" />
                    <span className="FriendName">Aman</span>
                </li>
                <li className='FriendListItem'>
                    <img className='FriendImg' src="/assets/profile_friend.jpg" alt="" />
                    <span className="FriendName">Aman</span>
                </li>
                <li className='FriendListItem'>
                    <img className='FriendImg' src="/assets/profile_friend.jpg" alt="" />
                    <span className="FriendName">Aman</span>
                </li>
                <li className='FriendListItem'>
                    <img className='FriendImg' src="/assets/profile_friend.jpg" alt="" />
                    <span className="FriendName">Aman</span>
                </li>
                <li className='FriendListItem'>
                    <img className='FriendImg' src="/assets/profile_friend.jpg" alt="" />
                    <span className="FriendName">Aman</span>
                </li>
                <li className='FriendListItem'>
                    <img className='FriendImg' src="/assets/profile_friend.jpg" alt="" />
                    <span className="FriendName">Aman</span>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}
