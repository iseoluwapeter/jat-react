import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo1.png'



const Navbar = () => {
  return (
    <div className='navbar-dark bg-transparent '>
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <nav class="navbar navbar-expand-lg bg-transparent">
                        <div class="container-fluid">
                            <Link to='/' class="navbar-brand">
                              <img src={Logo} alt="Bootstrap" width="200" /> 
                            </Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="  nav-underline navbar-nav ms-auto  ">
                                    <li class="nav-item">
                                        <Link to='/' class="nav-link " aria-current="page">HOME</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link to='/galleries' class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            GALLERIES
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link to='/wedding' class="dropdown-item" >Wedding</Link></li>
                                            <li><Link to='/potrait' class="dropdown-item" >Potrait</Link></li>
                                        </ul>
                                        
                                    </li>
                                    <li class="nav-item">
                                        <Link to='/contact' class="nav-link" href="#">CONTACT</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='/about' class="nav-link" href="#">ABOUT</Link>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        
    </div>

    
  )
}

export default Navbar
