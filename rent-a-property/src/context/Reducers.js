export const favouriteReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_FAVOURITE":
            return {
                ...state,
                favourite:[...state.favourite,{...action.payload}]
            };
        case "REMOVE_FROM_FAVOURITE":
            return {
                ...state, 
                favourite: state.favourite.filter((f)=>f.id!==action.payload.id)
            };
        default:
            return state
    }
}

export const filterReducer = (state, action) => {
    switch (action.type) {
      case "FILTER_BY_LOCATION":
        // return { ...state, byColor:state.byColor.push(action.payload)};
        return { ...state, byLocation: action.payload};
      case "FILTER_BY_PRICE":
        return { ...state, byPrice:action.payload };
      case "FILTER_BY_PROPERTY_TYPE":
        return { ...state, byPropertyType:action.payload};
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return { byLocation:"", byPrice:"", byPropertyType:"" };
      default:
        return state;
    }
  };