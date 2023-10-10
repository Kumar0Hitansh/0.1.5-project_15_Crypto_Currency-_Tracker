import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function DisplayPage() {
  const {id}=useParams();
  const [coin,setcoin]=useState([]);

const fetchSingleCoin=async()=>{
  const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  setcoin(data);
};

console.log(coin);

  useEffect(()=>{
    fetchSingleCoin();
  },[])

  return (
    
    <>
    <div className='m-4 p-3'>
    <div style={{display:'flex','justifyContent': 'space-between','alignItems':' flex-end','flexEirection':' row','flexWrap':' nowrap'}}>
    <span style={{display:'flex','flexDirection': 'row','flexWrap': 'nowrap','alignItems': 'center','justifyContent': 'flexStart', gap:"15px" }}>
    <img src={coin?.image.small} alt={id}/>
    <span><h1 className='fw-bolder'> {id.toUpperCase()}</h1></span>
    <span>{coin.symbol}</span>
    </span>
    <span style={{'fontSize':"60px"}}> <h1 className='fw-bold'>#{coin.coingecko_rank}</h1> </span>
    </div>

 <div> <span> <h1 className='fw-bolder text-end'  style={{  fontSize:'60px' , color:'gold'}} >{coin?.market_data.current_price.inr} ₹</h1> </span></div>


 <div className='d-flex   justify-content-end  mt-4 '>
  <span  className='text-secondery opacity-50  '>Pcp</span>
  <span  style={coin?.market_data.price_change_percentage_1h_in_currency.inr <0 ? {color:"red"} : {color:"green"}}
  className='text-secondery opacity-75 ps-4 '>
  1h : { Math.round( coin?.market_data.price_change_percentage_1h_in_currency.inr  * 10) / 10}%</span>
  <span  style={coin?.market_data.price_change_percentage_24h_in_currency.inr<0 ? {color:"red"} : {color:"green"}}
  className='text-secondery opacity-75 ps-4 '>
  1d : { Math.round( coin?.market_data.price_change_percentage_24h_in_currency.inr * 10) / 10}%</span>
  <span  style={coin?.market_data.price_change_percentage_30d_in_currency.inr<0 ? {color:"red"} : {color:"green"}}
  className='text-secondery opacity-75 ps-4 '>
  1m : { Math.round( coin?.market_data.price_change_percentage_30d_in_currency.inr * 10) / 10}%</span>
  <span  style={coin?.market_data.price_change_percentage_1y_in_currency.inr <0 ? {color:"red"} : {color:"green"}}
  className='text-secondery opacity-75 ps-4 '>
  1y : { Math.round( coin?.market_data.price_change_percentage_1y_in_currency.inr  * 10) / 10 }%</span>
 </div>

 


  <div className='d-flex   justify-content-between mt-4 '>
    <span><h6 className='text-secondery opacity-50  '>Vol :{coin?.market_data.total_volume.inr}₹</h6></span>
    <span><h6 className='text-secondery opacity-50  '>M-Cap :{coin?.market_data.market_cap.inr}₹</h6></span>
    <span><h6 className='text-secondery opacity-50 '>Supp :{coin?.market_data.total_supply}</h6></span>
  </div>

 

     
{  coin?.description.hi!==''?(<div className='mt-4'><ul className='list-unstyled '>
                                                                                    <span className='fw-bold align-start'>Description </span>
                                                                                    <li style={{overflow:'hidden',height:'163px','textAlign':'justify'}}>{coin?.description.hi.split('<')[0]}.</li>
                                                                                    </ul></div>)   : ''}

     
    </div>

    </>
  )
}

export default DisplayPage