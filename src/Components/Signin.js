

import React from 'react';
import  "./Signin.css";
import img1 from "./images/img1.png";
import google from './images/google.png';
import fb from'./images/fb.png';



export default function Signin( {to} ) {
    
  return (
    <div className='Sign_in_conainer'>
        <div className='Sign_in_left'>
            <div className="Sign_in_left_head">
                <h1>Explore your <span>hobby</span> or passion</h1>
            </div>
             <div className="Sign_in_left_para">
                <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, 
                    teachers, suppliers, classes, workshops, and places to practice, participate or perform. 
                    Your hobby may be about visual or performing arts, sports, games, gardening,
                     model making, cooking, indoor or outdoor activities…</p>
                     <p>If you are an expert or a seller, you can Add your Listing and promote yourself, 
                        your students, products, services or events.
                     Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
            <div className="Sign_in_left_img">
              
                    <img src={img1} alt="" />
                
            
            </div>
        </div>
        <div className='Sign_in_right'>

            <div className='Sign_in_right_sign_in'>
                <div className="txt" style={{display:"flex"}}>
                    <div className='Sign_in_right_join_in'>  <h4>SignIn </h4></div>
                <div className='Sign_in_right_join_in' style={{marginLeft:'50px'}}>  <h4 style={{color:"gray"}}>JoinIn </h4></div>
                </div>
                
           
                 <div className='Sign_in_right_sign_in_continue'>
                    <button><img src={google} alt=''/>Continue with Google</button>
                     <button><img src={fb} alt=''/>Continue with Facebook</button>
                 </div>
                 <div className='Sign_in_right_sign_in_br'>
                     <div class="Sign_in__center">Or connect with</div>
                 </div>
                 <div className='Sign_in_right_sign_in_alter'>
                    <input value="email"  name='mail' placeholder='Email'/>
                     <input value="password" name='mail' placeholder='Password'/>
                 </div>
                 
                    <div className='Sign_in_right_sign_in_forget'>
                        <div className='Sign_in_right_sign_in_forget_rem'>
                            <input type="checkbox" name="checkbox" id="" /> Remember me
                        </div>
                        
                        <div className='Sign_in_right_sign_in_forget_for'>
                             <p>Forget password</p>
                        </div>
                        
                    </div>
                    
                
                 <div className='Sign_in_right_sign_in_continue'>
                    <button style={{width:"400px",height:'40px',
                padding:"12px 172px 12px 172px",   borderRadius: "8px 0px 0px 0px",
                 fontSize: "14px",fontWeight: "600",lineHeight:"16px"}}>Continue</button>
                 </div>

            </div>
           
       
    </div>
    </div>
  )
}