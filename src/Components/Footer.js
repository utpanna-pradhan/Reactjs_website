import React from 'react';
import './Footeer.css';
import ft1 from './images/ft1.png';
import ft2 from './images/ft2.png';
import ft3 from './images/ft3.png';
import ft4 from './images/ft4.png';
import ft5 from './images/ft5.png';
import ft6 from './images/ft6.png';
import ft7 from './images/ft7.png';

import ft9 from './images/ft9.png';
 

export default function Footer() {
  return (
    <div className='footer_cont'>
      <div className='footer_col1'>
        <h4>Hobbycue</h4>
        <p>About Us</p>
        <p>Our Services</p>
        <p>Work with Us</p>
        <p>FAQ</p>
        <p>Contact Us</p>
      </div>
      <div className='footer_col2'>
        <h4>How Do I</h4>
        <p>Sign Up</p>
        <p>Add a Listing</p>
        <p>Claim Listing</p>
        <p>Post a Query</p>
        <p>Add a Blog Post</p>
        <p>Other Queries</p>
      </div>
      <div className='footer_col3'>
        <h4>Quick Links</h4>
        <p>Listings</p>
        <p>Blog Posts</p>
        <p>Shop / Store</p>
        <p>Community</p>
      </div>
      <div className='footer_col4'>
        <div className='footer_col4_line1'>
            <div className='footer_col4_line1_head'>
                <h4>Social Media</h4>
            </div>
            <div className='footer_col4_line1_icon'>
                <img src={ft1} alt="" />
                <img src={ft2} alt="" />
                <img src={ft3} alt="" />
                <img src={ft4} alt="" />
                <img src={ft5} alt="" />
                <img src={ft6} alt="" />
                <img src={ft7} alt="" />
               
                <img src={ft9} alt="" />
            </div>
        </div>
        <div className='footer_col4_line2'>
            <div className='footer_col4_line2_head'>
                <h4>Invite Friends</h4>
            </div>
            <div className='footer_col4_line2_icon'>
                <input placeholder='Emailid' />
                <button>Invite</button>
            </div>
        </div>
      </div>
    </div>
  )
}

      
 