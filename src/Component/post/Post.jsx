import React from 'react'
import "./Post.css"
import { FaEllipsisV , FaRegHeart , FaRegThumbsUp , FaRegComment} from 'react-icons/fa';
import {Posts, Users} from "../../dummyData"

export default function Post({post}) {
    
  return (
    <div className='postContainer'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='userImage' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className='userName'>{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                <FaEllipsisV className='menuBar'/>
                </div>
            </div>
            <div className="caption">{post.desc}</div>
            <div className="postCenter">
                <img className='postimg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
            <div className="postbottomleft">
            <FaRegThumbsUp className='like'/>
            <FaRegHeart className='heart'/>
            <span className='likecounter'>{post.like} people liked it</span>
            </div>
            <div className="postbottomright">
                <FaRegComment className='comment'/>
                <span className="commentcounter">{post.comment} comments</span>
            </div>
            </div>
        </div>
    </div>
  )
}
