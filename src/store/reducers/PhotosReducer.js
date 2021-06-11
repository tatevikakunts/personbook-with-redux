import {ADD_PHOTO, FETCH_PHOTOS} from "../typesList";


export const PhotosReducer = (state={}, action)=>{
    switch(action.type){
        case ADD_PHOTO:
            return{...state, list:[...state.list, action.payload]}
        case FETCH_PHOTOS:
            return{...state, ...action.payload}


        default:
            return state
    }

}