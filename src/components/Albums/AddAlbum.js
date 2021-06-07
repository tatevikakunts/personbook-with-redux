import React, { useState} from "react";
import {connect} from "react-redux";

const AddAlbum = ({onFinish, activePerson})=>{


    const [formData, setFormData] = useState({
        personId:activePerson,
        title:"",

    })
    const changeHandle = (event)=>{
        setFormData({...formData, [event.target.name]:event.target.value} )
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        onFinish(formData)
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="form-group mb-2">
                <label>Album Title</label>
                <input className="form-control" type="text" name="title" onChange={changeHandle}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    )
}
const mapStateToProps= state=>{
    return{
        activePerson:state.persons.activePerson
    }
}
export default connect(mapStateToProps, null)(AddAlbum)