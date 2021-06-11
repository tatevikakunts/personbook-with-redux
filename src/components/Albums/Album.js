import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import {setPersonById} from "../../store/actions/persons";

const Album = ({album, photo, setLocalPerson, person}) => {
    //const {getPersonById} = useContext(GlobalContext)
    //const person = getPersonById(album.personId)

    useEffect(()=>{
        setLocalPerson(album.personId)

    },[])

    let history = useHistory()

    const clickHandler = event => {
        event.preventDefault()
        history.push(`/albums/${album.id}`)
    }

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card cur-pointer" onClick={clickHandler}>
                <img src={photo.src} alt={album.title}/>
                <div className="card-body">
                    <h3 className="card-title">{album.title}</h3>
                    <p className="card-text">{person.lName} {person.fName[0].toUpperCase()}.</p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        person:state.persons.personById
    }

}
const mapDispatchToProps = dispatch=>{
    return{
        setLocalPerson:id=>dispatch(setPersonById(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Album)