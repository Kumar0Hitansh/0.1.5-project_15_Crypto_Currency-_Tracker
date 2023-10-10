import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CoinsTable() {


  const [coins , setCoin] =  useState([]);
  const [loader , setLoader] = useState(false);
  const [search , getSearch] = useState("");
  const navigate = useNavigate();

const fetchCoins = async()=>{
    setLoader(true);
    const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`);
    
    setCoin(data);
    setLoader(false);
    };

    useEffect(()=>{
        fetchCoins();
    },[]);

    // console.log(coins);
    // console.log(search);

    const handleSearch =()=>{
        return coins.filter((coin)=> coin.name.toLowerCase().includes(search) ||  
                                                coin.symbol.toLowerCase().includes(search)  );
                                             };

    // console.log (handleSearch);

  return (
    <div className='pt-5 '>

    <div className=" m-auto    w-75 sticky-top">
    <Form.Control size="lg"  className='  text-center shadow-none border-dark ' onChange={(e)=> getSearch(e.target.value)}  type="text" placeholder="Search Crypto" />
    </div>

    <Table responsive striped hover className='mt-5 '>

    {loader? (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
    :
   ( <>
        <thead className='sticky-top'  style={{border:'1px solid black'}}><tr><th>#</th><th>Coin</th><th></th><th>name</th><th>Price</th><th>%1h</th><th>%1d</th><th>%7d</th><th>Mkt Cap</th><th>Volume</th></tr></thead>
      <tbody>   

{handleSearch().map((e )=>{
        return(
            <>
            <tr  key={e.name}  onClick={()=>{navigate(`/coins/${e.id}`)}}>
          <td># </td>
          <td> <img src={e.image} alt={e.id} width='40px' /></td>
          <td className='text-secondary fw-lighter fs-6'>{e.symbol}</td>
          <td className='fw-bold'>{e.name} </td>
          <td style={{color:"gold"}}>₹ {e.current_price}</td>
          <td style={e.price_change_percentage_1h_in_currency<0 ? {color:"red"} : {color:"green"}}>{Math.round( e.price_change_percentage_1h_in_currency * 10) / 10}%</td>
          <td style={e.price_change_percentage_7d_in_currency<0 ? {color:"red"} : {color:"green"}}>{Math.round( e.price_change_percentage_7d_in_currency * 10) / 10}%</td>
          <td style={e.price_change_percentage_24h_in_currency<0 ? {color:"red"} : {color:"green"}}>{Math.round( e.price_change_percentage_24h_in_currency * 10) / 10}%</td>
          <td className='text-secondary'>₹{e.market_cap}</td>
          <td className='text-secondary'>₹{e.total_volume}</td>
        </tr>
        </>
        )
    })}
      </tbody>
      </> 
      )}
      </Table>
      </div>
  )}

export default CoinsTable