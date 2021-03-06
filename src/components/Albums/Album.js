import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../App";
import {useParams} from "react-router-dom"
import PhotoCard from "../Photos/PhotoCard";
import {connect} from "react-redux";
import {setAlbumById} from "../../store/actions/albums";
import {setPersonById} from "../../store/actions/persons";

const Album = ({photos, setAlbumLocal, setLocalPerson})=>{
    //const {getPersonById} = useContext(GlobalContext)
    const {id} = useParams()
    const [album, setAlbum] = useState(null)
    const [person, setPerson]= useState(null)
    const[albumPhotos, setAlbumPhotos]=useState(photos.filter(p=>p.albumId===+id))

    useEffect(()=>{
        if(album){
            setLocalPerson(+album.personId)
            setAlbumLocal(+id)
        }
    },[])
    // useEffect(() => {
    //     setLocalPerson(+album.personId)
    // }, [album]);


    const renderAlbum = ()=>{
        if(!album || !person){
            return(<div>Loading...</div>)
        }
        return(
            <div className="container">
                <h1>{album.title}</h1>
                <h2>by {person.lName} {person.fName}</h2>
                <div className="row">
                    {albumPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}/>)}
                </div>
            </div>

        )
    }

    return renderAlbum()
}
const mapStateToProps = state=>{
    return{
        photos:state.photos.list
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        setAlbumLocal: id=>dispatch(setAlbumById(id)),
        setLocalPerson:personId=>dispatch(setPersonById(personId))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Album)