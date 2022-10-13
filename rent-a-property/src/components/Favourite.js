import React from 'react';
import Header from './Header';
import Card from './Card';
import { FavouriteState } from '../context/Context'

const Favourite = () => {
    const {
        state:{favourite},
        dispatch
    } = FavouriteState();
    if(!favourite.length){
        return(<h1>There is no favourite in your list</h1>)
    }
  return (
    <div className='main-container'>
        <div><Header/></div>
        <br/>
        <div className='card-filter-container'>
            
            <p>Your Favourite List</p>
            
            <div className='card-container'>
                {
                favourite.map((item)=>{
                    return <Card item = {item} key = {item.id} />
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Favourite