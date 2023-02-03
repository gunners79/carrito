import React from 'react';
import Footer from './footer';
import Header from './header';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


const Home = () => {
  return (
    <div><br></br> <br></br> <br></br> <br></br> <br></br> 

                  <ImageSlider slides={SliderData} />;
                  
    </div>
  )
}

export default Home;