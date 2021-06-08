import React, { useState} from "react";
import personsInitial, {setPersonsToStorage, activePersonId, setActivePersonToStorage} from "../data/persons";
import Navigation from "./Navigation";
import Pages from "../layouts/Pages";
import albumsInitial, {setAlbumsToStorage} from "../data/albums"
import photosInitial, {setPhotosToStorage} from "../data/photos";
import postInitial, {setPostsToStorage} from "../data/posts";
export const GlobalContext = React.createContext(null)

const App =()=>{

    const [persons, setPersons]=useState(personsInitial)


    const getPersonById = (id)=>{
        const idx = persons.findIndex(person=> person.id ===+id)
        if (idx ===-1){
            return null
        }
        return persons[idx]
    }

    const [albums, setAlbums]=useState(albumsInitial)

    const addNewAlbum = formData=>{
        const newAlbums = [...albums, {...formData, id:Date.now()}]
        setAlbums(newAlbums )
        setAlbumsToStorage(newAlbums)
    }
    const getAlbumById = (id)=>{
        const idx = albums.findIndex(album=> album.id ===id)
        if (idx ===-1){
            return null
        }
        return albums[idx]
    }

    const [photos, setPhotos]=useState(photosInitial)

    const addNewPhoto = formData=>{
        const newPhotos = [...photos, {...formData, id:Date.now(), like:0, dislike:0}]
        setPhotos(newPhotos)
        setPhotosToStorage(newPhotos)
    }

    const addPhotoReaction = (id,vote)=>{
        const newPhotos = [...photos]
        const idx = newPhotos.findIndex(photo=>photo.id===id)
        if (idx===-1) return false
        if(vote===1){
            newPhotos[idx].like++
        }
        else{
            newPhotos[idx].dislike++
        }
        setPhotos(newPhotos)
        setPhotosToStorage(newPhotos)
    }

    const [posts, setPosts] = useState(postInitial)

    const addNewPost = (formData)=>{
        const newPosts = [...posts, {...formData, id:Date.now(), datetime:Date.now()}]
        setPosts(newPosts)
        setPostsToStorage(newPosts)
    }



    return(
        <GlobalContext.Provider value={{
            getPersonById,
            albums,
            addNewAlbum,
            getAlbumById,
            photos,
            addNewPhoto,
            addPhotoReaction,
            posts,
            addNewPost}}>
            <Navigation/>
            <Pages/>
        </GlobalContext.Provider>
    )
}
export default App