/*import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './SideBar.css'



export default function SideBar(){
    const[navCollapse, setNavCollapse] = useState(false)
    return(

            

            <div className='sidebar_content'style={{width: '250px', float: 'left'}}>

            <div className={`sidebar-container ${navCollapse ? "navCollapse" : ""}`}>
                <i className='fa fa-hourglass' onClick={e => setNavCollapse(!navCollapse)} ></i>
                <br></br>
                <br></br>
                <Link to="/" className="nav-link">
                <div className='nav-option option1'>
                <i class="fa fa-home" aria-hidden="true"></i><h3> Home</h3>
                    </div>
                </Link>    
                
                
                <br></br>
                <Link to="/add" className="nav-link">
                <div className='nav-option option1'>
                
                    <i className='fa fa-home'></i>
                    <h3>Create Class</h3>

                </div>
                </Link>

                <br></br>
                <Link to="/table" className="nav-link">
                <div className='nav-option option1'>
                
                    <i className='fa fa-home'></i>
                    <h3>Time Table</h3>
                    

                </div>
                </Link>
                <br></br>
                <div className='nav-option option1'>
                    <i className='fa fa-home'></i>
                    <h3>Dashboard</h3>

                </div>
                <br></br>
                <div className='nav-option option1'>
                    <i className='fa fa-home'></i>
                    <h3>Dashboard</h3>

                </div>

            </div>
            </div>
        
    )
}
*/