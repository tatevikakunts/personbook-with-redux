import React, {useState} from "react"
import {connect} from "react-redux";
import {CHANGE_ADD_ALBUM_MODE} from "../../store/typesList";
import {addAlbum} from "../../store/actions/albums"

const AddAlbum = ({ activePerson, addAlbumLocal, setAddAlbumMode}) => {
    const [formData, setFormData] = useState({
        personId: activePerson,
        title: ''
    })

    const changeHandle = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }


    return (
        <form onSubmit={event=>{
            event.preventDefault()
            addAlbumLocal(formData)
            setAddAlbumMode()
        }
        }>
            <div className="form-group mb-2">
                <label>Title</label>
                <input type="text" className="form-control" name="title" onChange={changeHandle}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    )
}
const mapStateToProps = state => {
    return {
        activePerson: state.persons.activePerson
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        setAddAlbumMode:()=>dispatch({type:CHANGE_ADD_ALBUM_MODE}),
        addAlbumLocal:album=>dispatch(addAlbum(album))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum)