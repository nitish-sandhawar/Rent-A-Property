import React from 'react';
import "./Home.css";
import Header from './Header';
import Card from './Card';
import { FavouriteState } from '../context/Context'
import Filter from './Filter';

const Home = () => {
    const {
        state:{properties},
      } = FavouriteState();

    // const {state} = FavouriteState();
    console.log(properties)
  return (
    <div className='main-container'>
        <div><Header/></div>
        <br/>
        <div className='card-filter-container'>
            <div className='secondary-header'>
                <p>Search Properties To Rent</p>
                <input type="text"></input>
            </div>
            <Filter properties = {properties} />
            <div className='card-container'>
                {
                properties.map((item)=>{
                    return <Card item = {item} key = {item.id} />
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Home