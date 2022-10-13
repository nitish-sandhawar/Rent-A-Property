import React from 'react';
import "./Filter.css";

const Filter = ({properties}) => {
  return (
    <div className='filter-bar'>
        <div className='location-filter'>
            <label for="location">Location</label>
            <select name="location" id="location">
                {
                    properties.map((item)=>{
                        return <option value={item.address}>{item.address}</option>
                    })
                }
            </select>
        </div>
        <div className='time-filter'>
            <label for="when">When</label>
            <input type="date" id="when" name="when"></input>
        </div>
        <div className='price-filter'>
            <label for="price">Price</label>
            <select name="price" id="price">         
                <option value="1-200">$1-$200</option>
                <option value="200-400">$200-$400</option>
                <option value="400-600">$400-$600</option>
                <option value="600-800">$600-$800</option>
            </select>
        </div>
        <div className='property-type-filter'>
        <label for="property-type">Property Type</label>
            <select name="property-type" id="property-type">      
                <option value="houses">Houses</option>
                <option value="apartments">Apartments</option>
                <option value="godowns">Godowns</option>
                <option value="warehouses">Warehouse</option>
                <option value="hotels">Hotels</option>
            </select>
        </div>
        <div className='search-button'>
            <button type='submit'>Search</button>
        </div>
    </div>
  )
}

export default Filter