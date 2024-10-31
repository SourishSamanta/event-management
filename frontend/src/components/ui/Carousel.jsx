import React, { useEffect, useState } from 'react'
import Hero1 from "../../assets/Heroimg1.jpg";
import Hero2 from "../../assets/Heroimg2.jpg";
import Hero3 from "../../assets/Heroimg3.jpg"; 

const Carousel = () => {

    const slides = [Hero1,Hero2,Hero3];
    const [curr, setCurr] = useState(0);
    const next = ()=>{
        setCurr((curr) => (curr === slides.length - 1? 0 : curr + 1));
    }
    const autoSlide = true;

    useEffect(() => {
      
        const slideInterval = setInterval(next, 6000)
      return () => {
        clearInterval(slideInterval);
      }
    }, [])
    
  return (
    <div className=' overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-1000 '
            style={{ transform: `translateX(-${curr * 100}%)` }}
        >
            {
                slides.map( s => (
                    <img src={s} alt="" className=' w-full  object-cover' />
                ))
            }
        </div>


    </div>
  )
}

export default Carousel