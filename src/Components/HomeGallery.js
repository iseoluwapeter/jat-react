import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import JAT1 from '../images/JAT-104.jpg';
import JAT2 from '../images/JAT-106.jpg';
import JAT3 from '../images/Favour-3b.jpg';
import JAT4 from '../images/JAT-114.jpg';
import JAT5 from '../images/JAT-128.jpg';
import JAT6 from '../images/JAT-133.jpg';
import JAT7 from '../images/JAT-2.jpg';
import JAT8 from '../images/Eyitayo-3.jpg';
import JAT9 from '../images/Favour-4.jpg';
import JAT10 from '../images/Favour-b.jpg';
import JAT11 from '../images/Akinz-2.jpg';
import JAT12 from '../images/Akinz-4.jpg';
import JAT13 from '../images/Akinz-5.jpg';
import JAT14 from '../images/Eyitayo-6.jpg';
import JAT15 from '../images/Eyitayo.jpg';
import JAT16 from '../images/JAT-2.jpg';
import JAT17 from '../images/jat-4.jpg';
import JAT18 from '../images/Ola-2.jpg';
import JAT19 from '../images/Ola-4.jpg';
import JAT20 from '../images/Ola-7.jpg';
import JAT21 from '../images/Ola-8.jpg';
import JAT22 from '../images/Ola.jpg';
import JAT23 from '../images/Prof-2.jpg';
import JAT24 from '../images/Stephen-2.jpg';
import JAT25 from '../images/Stephen-3.jpg';
import JAT26 from '../images/Stephen-5.jpg';
import JAT27 from '../images/Famassa-48.jpg';
import JAT28 from '../images/Famassa-49.jpg';
import JAT29 from '../images/Famassa-66.jpg';
import JAT30 from '../images/Famassa-78.jpg';
import JAT31 from '../images/Famassa-79.jpg';
import JAT32 from '../images/Famassa-48.jpg';
import JAT33 from '../images/Prof-6.jpg';
import JAT34 from '../images/Prof-2.jpg';
import JAT35 from '../images/Eyitayo.jpg';
const images = [
                 JAT1,JAT2,JAT3,JAT2,JAT4,JAT5,JAT6,JAT7,JAT8,JAT9,JAT10,
                 JAT11,JAT12,JAT13,JAT14,JAT15,JAT16,JAT17,JAT18,JAT19,JAT20,
                 JAT21,JAT22,JAT23,JAT24,JAT25,JAT26,JAT27,JAT28,JAT29,JAT30,
                 JAT31,JAT32,JAT33,JAT34,JAT35,JAT10 

                ]

const HomeGallery = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage =(img, i) =>{ 
        // console.log(img, i)
        setData({img, i})
    }
    return (
        <> 
            {data.img &&
                <div style={{
                        width:'100%',
                        height:'100vh',
                        background:'black',
                        position:'fixed',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        // overflow: 'hidden', 
                    }}>
                        <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}}/>
                </div>
                    
            }
            <div style ={{padding:'10px'}}>
                <ResponsiveMasonry 
                        columnsCountBreakPoints={{350: 1,750: 2,900: 3}}
                    >
                    <Masonry gutter='5px' >
                        {images.map((image,i) =>(
                            <img
                                key= {i}
                                src={image}
                                style={{width:" 100%", display:"block", cursor:'pointer',
                                animation: 'ease-in'
                                }}
                                alt=''
                                onClick={()=> viewImage(image,i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )

    
}

export default HomeGallery
