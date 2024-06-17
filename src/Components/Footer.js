import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark m-2 p-5 text-white justify-content-center'>
        <h4 className='pe-5'>Contact Us</h4>
        <hr></hr>

        <div className="row">
            <div className='col-md-6 '>
                <h6>First Name</h6>
                <input type='search' className='outline-none bg-transparent border border-white rounded 2 p-3' placeholder='Firstname' style={{width:"50vh"}}></input><br/><br/>

                <h6>Last Name</h6>
                <input type='search' className='outline-none bg-transparent border border-white rounded 2 p-3' placeholder='Lastname' style={{width:"50vh"}}></input><br/> <br/>

                <h6>Email</h6>
                <input type='search' className='outline-none bg-transparent border border-white rounded 2 p-3' placeholder='Email' style={{width:"50vh"}}></input><br/> <br/>

                <button className='bg-primary text-white p-2 justify-content-center border-0 rounded-2 w-50 '>Submit</button>
            </div>

            <div className='col-md-6  '>
              <Link to='/' className='text-decoration-none text-white'>Home</Link> <br/><br/>
              <Link to='/contact' className='text-decoration-none text-white'>Contact Us</Link><br/><br/>
              <Link to='/galleries'className='text-decoration-none text-white'>Our Works</Link><br/><br/>
              <Link to='/about'className='text-decoration-none text-white'>About Us</Link><br/><br/>
              <Link to='/policies'className='text-decoration-none text-white'>Policies</Link><br/><br/>
               
            </div>
        </div>
        

      
    </div>
  )
}

export default Footer
