import React from 'react'
import '../Pages/Home.css';
import Slider from '../Components/Slider';
import HomeGallery from '../Components/HomeGallery';
import JAT1 from '../images/Favour-4.jpg';

const Home = () => {
  return (
    <div >
      <Slider/>
        <HomeGallery/>

        {/* welcome greetings */}
        <section className=' bg-danger m-2 p-5'>
            <div className='row container'>
                <div className='col-md-6 ps-5'>
                    <img src={JAT1} style={{width:"400px", justifyContent:'center'}}/>
                </div>

                <div className='col-md-6 '>
                      
                      <h2 className='p-5 mt-5' style={{textAlign:"center"}}>WE WELCOME YOU</h2>

                     <h5 style={{textAlign:"center"}}> We are JAT photography. World reknowned photographer that creates images you can feel.
                      We don't just create images. We are memories</h5> 
                </div>
            </div>
         
        </section>
            
    </div>
  )
}

export default Home
