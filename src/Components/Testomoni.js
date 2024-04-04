import React from 'react';
import './Testomoni.css';
import quote from'./images/quote.png'
import Audio from'./images/Audio Track.png';
import Group from'./images/Group 108.png'

export default function Testomoni() {
  return (
    <>
    <div className='test_container'>
      <div className='test_container_line1'>
        <div className='test_container_line1_img'>
         
          <img src={quote} alt='' />
        </div>
        <div className='test_container_line1_head'>

          <h2>Testimonials</h2> 
        </div>
      </div>
       <div className='test_container_line2'>
        <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very 
          difficult to find or connect with like minded people. Websites like hobbycue.com is a
           great service which helps me get in touch with, communicate, connect, and exchange ideas
           with other dancers. It also provides the extra benefit of finding products and services 
           that I can avail, which I can be assured is going to be of great quality as it comes 
           recommended by people of the hobbycue community. To have discussions, to get visibility, 
           and to be able to safely explore various hobbies and activities in my city, all under one
            roof, 
          is an excellent idea and I highly recommend it.</p>
       </div>
        <div className='test_container_line3'>
          <div className='test_container_line3_left'>
              <img src={Audio} alt="" />
          </div>
          <div className='test_container_line3_right'>
            <img src={Group} alt="" />
          </div>
        </div>
    </div>
</>
  )
}
