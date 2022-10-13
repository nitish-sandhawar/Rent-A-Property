import React, {createContext, useContext, useReducer} from 'react'
import { faker } from '@faker-js/faker';
import { favouriteReducer } from './Reducers';

const Favourite = createContext();
const Context = ({children}) => {

    const properties = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name : faker.company.name(),
        price: faker.finance.amount(),
        address: faker.address.city(),
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

    return <Favourite.Provider value={{state,dispatch}}>{children}</Favourite.Provider>
}

export default Context

export const FavouriteState = () =>{
    return useContext(Favourite);
}