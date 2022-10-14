import React from 'react';
import "./Card.css";
import { AiFillHeart} from "react-icons/ai";
import { MdFavoriteBorder  } from "react-icons/md"
import { FavouriteState } from '../context/Context';


const Card = ({item}) => {
    const {
        state:{favourite},
        dispatch,
    } = FavouriteState();
    console.log(favourite)
  return (
    <div className="blog-card">
    <div className="card-img">
      <img
        src={item.image}
        alt={item.name}
      />
    </div>
    <div className="card-content">
      <div className="card-body">
        <div className='favourite-and-price'>
            <p><span style={{"color":"#200994", "fontSize":"20px","fontWeight":600}}>${item.price}</span>/month</p>
            {
                favourite.some((p)=>p.id===item.id)?
                    <AiFillHeart color="#200994"
                    onClick={()=>{
                        dispatch({
                            type:"REMOVE_FROM_FAVOURITE",
                            payload:item,
                        });
                    }} />
                :
                    <MdFavoriteBorder color="#200994"
                     onClick={()=>{
                        dispatch({
                            type:"ADD_TO_FAVOURITE",
                            payload:item,
                        });
                    }}/>             
            }
            
        </div>
        <h1>{item.name}</h1>
        <p>
          {item.address}
        </p>
      </div>
      <div className="card-footer">
        <p>{item.no_of_beds} Beds</p>
        <p>{item.no_of_bathrooms} Bathrooms</p>
        <p>5x7 m<sup>2</sup></p>
      </div>
    </div>
  </div>
  )
}

export default Card