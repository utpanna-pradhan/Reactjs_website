import React from 'react';
import './Explore.css';
import people from './images/people.png';
import place from './images/place.png';
import product from './images/product.png';
import program from './images/program.png';


export default function Explore() {
  return ( 
    <>
    <div className='explore_container'>
      <div className='explore_container_left'>
        <div className='explore_container_left_line1'>
            <img src={people} alt='people' />
            <h4 id='#people'>People</h4>
        </div>
        <div className='explore_container_left_line2'>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality.
                 Find a partner, teammate, accompanist or collaborator.</p>
        </div>
        <div className='explore_container_left_line3'>
            <button>Connect</button>
        </div>
      </div> 
      <div className='explore_container_right' >
        <div className='explore_container_right_line1'>
            <img src={place} alt='people' />
            <h4>Place</h4>
        </div>
        <div className='explore_container_right_line2'>
            <p>Find a class, school, playground, auditorium, studio, shop or an event venue. 
                Book a slot at venues that allow booking through hobbycue.</p>
        </div>
        <div className='explore_container_right_line3'>
            <button>Meet up</button>
        </div>
      </div>
      
    </div>





   <div className='explore_container2'>
      <div className='explore_container2_left'>
        <div className='explore_container2_left_line1'>
            <img src={product} alt='people' />
            <h4>Product</h4>
        </div>
        <div className='explore_container2_left_line2'>
            <p>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, 
                online stores or from community members.</p>
        </div>
        <div className='explore_container2_left_line3'>
            <button>Get it</button>
        </div>
      </div>
      <div className='explore_container2_right'>
        <div className='explore_container2_right_line1'>
            <img src={program} alt='people' />
            <h4>Program</h4>
        </div>
        <div className='explore_container2_right_line2'>
            <p>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
        </div>
        <div className='explore_container2_right_line3'>
            <button>Attend</button>
        </div>
      </div>
      
    </div>

    </>
  )
}
