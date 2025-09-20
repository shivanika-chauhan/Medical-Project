import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Search from '../components/searchbar/Search'
import Order from '../components/order/Order'
import ImageSlider from '../components/imageslider/ImageSlider'
import ShopByCategory from "../components/shop/ShopByCategory";

import Deliver from '../components/Deliver/Deliver'
import Footer from '../components/footer/Footer'
import Tips from '../components/Tips'

const Home = () => {
  return (
    <div>
    
      <Search/>
      <Tips/>
      <Order/>
     <ImageSlider/>
     <ShopByCategory/>
    <Deliver/>
    <Footer/>
    
    
    </div>
  )
}

export default Home
