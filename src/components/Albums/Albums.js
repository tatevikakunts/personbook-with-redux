import React, {useContext} from 'react'
import {GlobalContext} from "../App"
import AlbumCard from "./AlbumCard";
import {connect} from "react-redux";

const Albums = ({albums, photos}) => {
    //const {photos} = useContext(GlobalContext)


    const renderAlbums = () => {
        if (!albums.length) {
            return (
                <h1>No albums</h1>
            )
        }
        return (
            <div className="row">
                {albums.map((album) => {
                    const albumPhotos = photos.filter(p=>p.albumId === album.id)
                    if ( albumPhotos.length === 0 ) return null
                    return (<AlbumCard key={album.id} album={album} photo={albumPhotos[0]}/>)
                })}
            </div>
        )
    }

    return (
        <div className="container">
            {renderAlbums()}
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        albums: state.albums.list,
        photos:state.photos.list
    }
}

export default connect(mapStateToProps, null)(Albums)