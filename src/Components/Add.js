import React from 'react';
import './Add.css';
import Add1 from './images/Add1.png'

export default function Add() {
  return (
    <div className='add_container'>
       <div className="add_line1"> 
        <div className="add_line1_img">
            <img src={Add1} alt="" />
        </div>
        <div className="add_line1_head">
            <h2>Add your own</h2>
        </div>
       </div>
       <div className="add_line2">
        <p>Are you a teacher or expert? Do you sell or rent out equipment, venue 
            or event tickets? Or, you know someone who should be on hobbycue?
             Go ahead and Add your Own page</p>
       </div>
       <div className="add_line3">
        <button>Add review</button>
       </div>
         

    </div>
  )
}



       
  