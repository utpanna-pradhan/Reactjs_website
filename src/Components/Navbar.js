import React from 'react';
import logo from './images/logo.png';
import explore from './images/explore.png';
import Hobbies from './images/Hobbies.png';
import search from './images/search.png';
import './Navbar.css';


 
export default function Navbar() {
  return (
    <div className='nav_container'>
      
      <div className="nav_bar_search">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex">

                {/* logo*/}
                <div className="nav_bar_logo">
                  <img src={logo} alt="Logo" />
                </div>

                {/* searchbar*/}
                <div className="nav_bar_search">
                   <input className="form-control me-2" type="search" placeholder="search here" aria-label="Search" />
                   <img src={search} alt='' />
                </div>
                   

                {/* nav icon*/}
                <div className="nav_bar_icon_1">
                  <div className="dropdown">
                    
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"
                    >
                     <img src={explore} alt="Logo" style={{marginTop:"-3px"}}/> Explore
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" >
                      <li><button className="dropdown-item" type="button">People - Community</button></li>
                      <li><button className="dropdown-item" type="button">Places - Venues</button></li>
                      <li><button className="dropdown-item" type="button">Programs - Events</button></li>
                      <li><button className="dropdown-item" type="button">Products - Store</button></li>
                      <li><button className="dropdown-item" type="button">Blogs</button></li>
                    </ul>
                  </div>
                </div>


                <div className="nav_bar_icon_2">
                  <div className="dropdown">
                    
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={Hobbies} alt="Logo" style={{marginTop:"-3px"}} />Hobbies
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" >
                      <li><button className="dropdown-item" type="button">Action</button></li>
                      <li><button className="dropdown-item" type="button">Another action</button></li>
                      <li><button className="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                  </div>
                </div>

            {/*img*/}
              <div className="nav_bar_img" >
                <span class="material-icons" >bookmark</span>
                <span class="material-icons" >notifications</span>
                <span class="material-icons" >shopping_cart</span>
              </div>

              {/*signin*/}
                <div className="nav_bar_signin">
                  <button>Sign in</button>
                  </div> 
                  </form>
                </div>
            </nav>

        </div>
        
      
        

     
    </div>
  )
}
