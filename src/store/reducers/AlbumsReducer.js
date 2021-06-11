import {ADD_NEW_ALBUM, FETCH_ALBUMS, CHANGE_ADD_ALBUM_MODE, SET_ALBUM_BY_ID} from "../typesList";



export const AlbumsReducer =(state= {}, action)=>{
    switch(action.type){
        case ADD_NEW_ALBUM:
            return{...state, list:[...state.list, action.payload]}
        case FETCH_ALBUMS:
            return{...state, ...action.payload}
        case CHANGE_ADD_ALBUM_MODE:
            return{...state, addAlbumMode:!state.addAlbumMode}
        case SET_ALBUM_BY_ID:
            const idx = state.list.findIndex(a=>a.id===action.payload)
            if (idx===-1) return {...state, albumById:{}}
            return{...state, albumById:state.list[idx]}

        default:
            return state
    }
}