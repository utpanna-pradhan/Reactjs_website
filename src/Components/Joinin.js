import React from 'react';
import  "./Home.css";
import "./Joinin.css";
import img1 from "./images/img1.png";
import google from './images/google.png';
import fb from'./images/fb.png';
import { Link } from 'react-router-dom';

export default function Joinin() {
  return (
    <div className='join_container'>
      <div className='Home_conainer'>
        <div className='Home_left'>
            <div className="Home_left_head">
                <h1>Explore your <span>hobby</span> or passion</h1>
            </div>
             <div className="Home_left_para">
                <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, 
                    teachers, suppliers, classes, workshops, and places to practice, participate or perform. 
                    Your hobby may be about visual or performing arts, sports, games, gardening,
                     model making, cooking, indoor or outdoor activities…</p>
                     <p>If you are an expert or a seller, you can Add your Listing and promote yourself, 
                        your students, products, services or events.
                     Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
            <div className="Home_left_img">
              
                    <img src={img1} alt="" />
                
            
            </div>
        </div>
        <div className='Home_right'>

            <div className='Home_right_Home'>
                <div className="txt" style={{display:"flex"}}>
                    <div className='Home_right_join_in'> 
                    
                       <h4> <Link to='/signin'style={{color:"gray"}}>Sign In</Link></h4>
                 </div>

                <div className='Home_right_join_in' style={{marginLeft:'50px'}}> 
                     <h4 style={{color:"gray"}}>
                           <Link to='/Joinin'>Join In </Link></h4></div>
                </div>
                
                 <div className='Home_right_Home_continue'>
                    <button><img src={google} alt=''/>Continue with Google</button>
                     <button><img src={fb} alt=''/>Continue with Facebook</button>
                 </div>
                 <div className='Home_right_Home_br'>
                     <div class="Home__center">Or connect with</div>
                 </div>
                 <div className='Home_right_Home_alter'>
                    <input value="email"  name='mail' placeholder='Email'/>
                     <input value="password" name='mail' placeholder='Password'/>
                 </div>
                 <div className='Home_right_Home_privacy'>
                   <p>
                    By continuing, you agree to our <span className='pr1'>Terms of Service </span> and
                   <span className='pr1'> Privacy Policy</span> .
                   </p>
                 </div>
                    
                    
                
                 <div className='Home_right_Home_continue'>
                    <button style={{width:"400px",height:'40px',
                   borderRadius: "8px 0px 0px 0px", paddingLeft:"120px",
                 fontSize: "14px",fontWeight: "600",lineHeight:"16px"}}>Agree and Continue</button>
                 </div>
            </div>
           
       
    </div>
    
</div>
    </div>
  )
}
 