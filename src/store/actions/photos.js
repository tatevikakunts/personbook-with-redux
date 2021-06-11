import photosInitial, {setPhotosToStorage} from "../../data/photos";
import {ADD_PHOTO, FETCH_PHOTOS} from "../typesList";


export const getPhotos = ()=>{
    return async dispatch =>{
        try{
            const pic = getPic()
            await dispatch(fetchPhotos(pic))
        }catch(e){
            console.log(e.message)
        }
    }
}
export const addPhoto = photo =>{
    return async dispatch=>{
        try{
            const newPhoto = await addPhotoOnServer(photo)
            await dispatch(addPhotoInState(newPhoto))
        }catch(e){
            console.log(e.message)
        }
    }
}
const fetchPhotos = data=>{
    return{
        type:FETCH_PHOTOS,
        payload:data
    }
}
const addPhotoInState = photo=>{
    return{
        type:ADD_PHOTO,
        payload:photo
    }
}

//server side
const getPic = ()=>{
    return{
        list:[...photosInitial]
    }
}
const addPhotoOnServer = photo=>{
    const newPhoto={
        ...photo, id:Date.now()
    }
    photosInitial.push(newPhoto)
    setPhotosToStorage(photosInitial)
    return newPhoto
}