import {combineReducers} from "redux"
import {PersonsReducer} from "./PersonReducer"
import {PostsReducer} from "./PostsReducer";
import {AlbumsReducer} from "./AlbumsReducer";
import {PhotosReducer} from "./PhotosReducer";



const RootReducer = combineReducers({
    persons: PersonsReducer,
    posts: PostsReducer,
    albums:AlbumsReducer,
    photos:PhotosReducer
})

export default RootReducer