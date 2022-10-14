import React from 'react';
import "./Home.css";
import Header from './Header';
import Card from './Card';
import { FavouriteState } from '../context/Context'
import Filter from './Filter';

const Home = () => {
    const {
        state:{properties},
        filterState: { byLocation, byPrice, byPropertyType, searchQuery },
        filterDispatch,
      } = FavouriteState();

    // const {state} = FavouriteState();
    console.log(properties)

    const filteredProperties = (command) => {
      let sortedProperties = properties;
        if(byLocation.length){
          sortedProperties = sortedProperties.filter((prod)=>byLocation.includes(prod.address))
        }
        // if(byGender.length){
        //   sortedProperties = sortedProperties.filter((prod)=>byGender.includes(prod.gender))
        // }
        if(byPrice.length){
            const range = byPrice.split("-");
            range[0] = Number(range[0])
            range[1] = Number(range[1]);
            sortedProperties = sortedProperties.filter((prod)=>prod.price>=range[0]&&prod.price<=range[1])
            console.log(range)
        }
        if(byPropertyType.length){
          sortedProperties = sortedProperties.filter((prod)=>byPropertyType.includes(prod.property_type))
        }
    
        if (searchQuery) {
          sortedProperties = sortedProperties.filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery)
          );
        }
    
        return sortedProperties;
    };

  return (
    <div className='main-container'>
        {/* <div><Header/></div>
        <br/> */}
        <Header />
        <div className='card-filter-container'>
            <div className='secondary-header'>
                <p>Search Properties To Rent</p>

                {/* searchbar */}
                
                <input className='search-bar'
                type="search"
                placeholder='Search With Searchbar'
                onChange={(e) => {
                  filterDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}></input>


            </div>
            <Filter filteredProperties = {filteredProperties} />
            <div className='card-container'>
                {
                filteredProperties().map((item)=>{
                    return <Card item = {item} key = {item.id} />
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Home