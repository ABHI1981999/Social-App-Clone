import React from 'react'
import Feed from '../Component/feed/Feed'
import LeftBar from '../Component/leftbar/LeftBar'
import RightBar from '../Component/rightbar/RightBar'
import Topbar from '../Component/topbar/Topbar'
import "./Home.css"


export default function Home() {
  return (
    <>
        <Topbar/>
        <div className="homecontainer">
           <LeftBar/>
           <Feed/>
           <RightBar/>
        </div>
    </>
  )
}
