import React from 'react';
import './Community.css';
import community from'./images/community.png'

export default function Community() {
  return (
    <div className='community_container'>
      <div className="communiy_head">
        <h1>Your <span className='sp1'>Hobby,</span> Your <span className='sp2'>Community...</span></h1>
      </div>
      <div className="community_img">
        <img src={community} alt="" />
      </div>
    </div>
  )
}
