import React from 'react';
import Header from './Header';
import Card from './Card';
import { FavouriteState } from '../context/Context'
import "./Favourite.css"

const Favourite = () => {
    const {
        state:{favourite},
    } = FavouriteState();
    // if(!favourite.length){
    //     return(<h1>There is no favourite in your list</h1>)
    // }
  return (
    <div className='main-container'>
        <Header/>
        {
        (!favourite.length) ?

            <div className="empty-list-tag"><h1>There is no favourite in your list</h1></div>
        :
            <div className='card-filter-container'>
                
                <p className="list-tag">Your Favourite List</p>
                
                <div className='card-container'>
                    {
                    favourite.map((item)=>{
                        return <Card item = {item} key = {item.id} />
                    })
                    }
                </div>
            </div>
        }
    </div>
  )
}

export default Favourite