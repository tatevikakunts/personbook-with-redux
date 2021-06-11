import albumsInitial, {setAlbumsToStorage} from "../../data/albums";
import {ADD_NEW_ALBUM, FETCH_ALBUMS, SET_ALBUM_BY_ID} from "../typesList";


export const getAlbums = ()=>{
    return async dispatch=>{
        try{
            const alb = getAlb()
            await dispatch(fetchAlbums(alb))
        }catch(e){
            console.log(e.message)
        }
    }
}

export const addAlbum = (album)=>{
    return async dispatch=>{
        try{
            const newAlbum = await addAlbumOnServer(album)
            await dispatch(addAlbumInState(newAlbum))
        } catch(e){
            console.log(e.message)
        }
    }
}

export const setAlbumById = albumId =>{
    return dispatch=>{
        try{
            dispatch(setAlbumByIdInState(albumId))
        }catch(e){
            console.log(e.message)
        }
    }
}

const addAlbumInState = album=>{
    return{
        type:ADD_NEW_ALBUM,
        payload:album
    }
}
const fetchAlbums = data =>{
    return{
        type:FETCH_ALBUMS,
        payload:data
    }
}
const setAlbumByIdInState = albumId=>{
    return{
        type:SET_ALBUM_BY_ID,
        payload:albumId
    }
}

//server side
const getAlb = ()=>{
    return{
        list:[...albumsInitial]
    }
}

const addAlbumOnServer = album=>{
    const newAlbum = {
        ...album,
        id:Date.now()
    }
    albumsInitial.push(newAlbum)
    setAlbumsToStorage(albumsInitial)
    return newAlbum
}