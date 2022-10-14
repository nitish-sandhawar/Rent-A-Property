import React from 'react';
import { FavouriteState } from '../context/Context';
import "./Filter.css";

const Filter = ({filteredProperties}) => {
    const {
        filterDispatch,
        filterState: { byLocation, byPrice, byPropertyType },
      } = FavouriteState();

      console.log(byLocation, byPrice, byPropertyType)
      const filterType = {
        location:["Delhi","Mumbai","Patna","Chennai","Kolkata","Pune"],
        propertyType:["houses","apartments","godowns","hotels","warehouses"]
      }

  return (
    <div className='filter-bar'>
        <div className='location-filter'>
            <label for="location">Location</label>
            <select name="location" id="location"
            onChange={(e) =>
                filterDispatch({
                type: "FILTER_BY_LOCATION",
                payload: e.target.value,
                })
            }>
                <option value="">All</option>
                {
                    filterType.location.map((item)=>{
                        return <option value={item}>{item}</option>
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
            <select name="price" id="price"
            onChange={(e) =>
                filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: e.target.value,
                })
            }>         
                <option value="">All</option>
                <option value="1-200">$1-$200</option>
                <option value="200-400">$200-$500</option>
                <option value="400-600">$500-$1000</option>
                <option value="600-800">$1000-$1500</option>
                <option value="600-800">$1500-$2000</option>
                <option value="600-800">$2000-$2500</option>
            </select>
        </div>
        <div className='property-type-filter'>
        <label for="property-type">Property Type</label>
            <select name="property-type" id="property-type"
            onChange={(e) =>
                filterDispatch({
                type: "FILTER_BY_PROPERTY_TYPE",
                payload: e.target.value,
                })
            }>  
            <option value="">All</option>
            {
                    filterType.propertyType.map((item)=>{
                        return <option value={item}>{item}</option>
                    })
            }    
            </select>
        </div>
        <div className='clear-button'>
            <button
            onClick={() =>
                filterDispatch({
                  type: "CLEAR_FILTERS",
                })
              }>
                Clear
            </button>
        </div>
    </div>
  )
}

export default Filter