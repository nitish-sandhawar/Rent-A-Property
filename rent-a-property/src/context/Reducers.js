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