import React, {createContext, useContext, useReducer} from 'react'
import { faker } from '@faker-js/faker';
import { favouriteReducer, filterReducer } from './Reducers';

const Favourite = createContext();
const Context = ({children}) => {

    const properties = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        // name : faker.company.name(),
        name : faker.address.city(),
        price: faker.finance.amount(),
        // address: faker.address.city(),
        address: faker.helpers.arrayElement(["Delhi","Mumbai","Patna","Chennai","Kolkata","Pune"]),
        image: faker.image.city(),
        no_of_beds: faker.helpers.arrayElement([1,2,3,4]),
        no_of_bathrooms: faker.helpers.arrayElement([1,2,3]),
        property_type : faker.helpers.arrayElement(["houses","apartments","godowns","hotels","warehouses"]),
    }));
    
    // console.log(properties);
    const [state, dispatch] = useReducer(favouriteReducer,{
        properties: properties,
        favourite: []
    })

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byLocation: "",
        byPrice: "",
        byPropertyType: "",
        searchQuery: "",
    });

    return <Favourite.Provider value={{state,dispatch, filterState, filterDispatch}}>
            {children}
        </Favourite.Provider>
}

export default Context;

export const FavouriteState = () =>{
    return useContext(Favourite);
}