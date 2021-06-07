import React, {useContext} from "react";
import {GlobalContext} from "../App";
import Album from "./Album";

const Albums = ()=>{
    const {albums, photos} = useContext(GlobalContext)


    const renderAlbums = ()=>{
        if (!albums.length){
            return(
                <h1>No albums</h1>
            )
        }
        return (
            <div className="row">
                {albums.map((album)=> {
                    const albumPhotos = photos.filter(p=>p.albumId===album.id)
                    if(albumPhotos.length===0) return null
                       return (<Album key = {album.id} album={album} photo={albumPhotos[0]}/>)
                    }
                )}
            </div>
        )

    }
    return (
        <div className="container">
            {renderAlbums()}
        </div>
    )
}
export default Albums