import React, {useState} from "react";

import {connect} from "react-redux"
import PersonalAlbums from "../Albums/PersonalAlbums";

const AddPost = ({onFinish, activePerson})=>{
    const[formData, setFormData]=useState({
        personId:activePerson,
        title:"",
        short:"",
        body:""
    })

    const changeFieldHandle= (event)=>{
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    return(
        <form onSubmit={()=>{onFinish(formData)}}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" type="text" name="title" onChange={changeFieldHandle}/>
            </div>
            <div className="form-group">
                <label>Short Text</label>
                <textarea className="form-control"  name="short" onChange={changeFieldHandle}/>
            </div>
            <div className="form-group">
                <label>Post Text</label>
                <textarea className="form-control"  name="body" onChange={changeFieldHandle}/>
            </div>
            <button  type="submit">Add Post</button>
        </form>

    )
}
const mapStateToProps= state=>{
    return{
        activePerson:state.persons.activePerson
    }
}

export default connect(mapStateToProps, null)(AddPost)