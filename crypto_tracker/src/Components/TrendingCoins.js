import React, { useEffect, useState } from 'react'
import './Components.css'
import axios from "axios";
import { Link } from 'react-router-dom';

import banner from './banner.jpg'
import banner1 from  './banner1.jpg'

import AliceCarousel from 'react-alice-carousel'

function TrendingCoins() {

  const [trending , setTrending ]=useState([])

  const FetchTrendingCoins = async ()=>{
    const {data}= await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');

    setTrending(data);  
  }
  
  useEffect( ()=>{
    FetchTrendingCoins();
  },[])

const items=trending.map((coin)=>{  
  return(
    <Link to ={`/coins/${coin.id}`} style={{textDecoration:"none"}} >  
      <img src={coin.image} alt={coin.name} height='90px' style={{marginBottom:10}} />
      <div style={coin.price_change_percentage_24h<0 ? {color:"red"} :{color:"green"}  }>{coin.price_change_percentage_24h } %</div>
      <div className='fw-bold'  style={{color:"gold"}}>{coin.current_price} ₹</div>
      <div className='text-dark fw-bolder fw-bold h3  '><span> {  coin.name}</span> </div>
       </Link>
  )
});
const responsive ={
                            0:{
                                items : 3, },
                            512:{
                                items : 5,},
                              };

  return (
    <>
    <img src={banner1} style={{width:'100%'}} alt="banner" />
    <div className='Banner '>
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={3500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay
      // autoPlayDirection='ltr'
      items={items}
    />
    </div>

    <img src={banner} style={{width:'100%'}} alt="banner" />
    </>
  )
}

export default TrendingCoins