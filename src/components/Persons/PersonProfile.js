import React, {useEffect, useContext, useState, Fragment} from "react";
import {useParams} from "react-router-dom"
import {connect} from "react-redux";
import {GlobalContext} from "../App";
import AddAlbum from "../Albums/AddAlbum";
import PersonalAlbums from "../Albums/PersonalAlbums";
import AddPost from "../Posts/AddPost";
import PersonalBlog from "../Posts/PersonalBlog";
import {CHANGE_EDIT_MODE, EDIT_PERSON} from "../../store/typesList";


const PersonProfile =({activePerson, editPerson, editMode, changeEditMode})=>{

    const {id}=useParams()
    const {getPersonById, addNewAlbum, addNewPost}=useContext(GlobalContext)
    const [person, setPerson]= useState(null)
    //const [editMode, setEditMode] = useState(false)
    const [addAlbum, setAddAlbum] = useState(false)
    const [addPost, setAddPost]= useState(false)

    useEffect(()=>{
        setPerson(getPersonById(id))
    }, [])

    const renderProfile = ()=>{
        if(!person) return false
        return(
            <div className="container">
                <div className="card w-100">
                    {editMode?renderForm():renderInfo()}
                </div>
                {renderEditButton()}
            </div>
        )

    }



    const changeFieldHandle = (event)=>{
        setPerson({...person, [event.target.name]:event.target.value})
    }

    const renderForm = ()=>{
        return(
            <form onSubmit={submitFormHandle}>
                <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" value={person.fName} name="fName" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" value={person.lName} name="lName" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input className="form-control" type="text" value={person.age} name="age" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="text" value={person.email} name="email" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input className="form-control" type="text" value={person.phone} name="phone" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group mb-2">
                    <label>Avatar</label>
                    <input className="form-control" type="text" value={person.avatar} name="avatar" onChange={changeFieldHandle}/>
                </div>
                <button type="submit">Save Change</button>
            </form>
        )
    }

    const renderInfo = ()=>{
        return(
            <Fragment>

                        <img src={person.avatar} alt="{person.fName}" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title">
                                {person.fName} {person.lName}
                            </h3>
                            <div className="card-text">
                                <p>{person.age}</p>
                                <p>{person.phone}</p>
                                <p>{person.email}</p>
                            </div>
                        </div>

            </Fragment>
        )
    }

    const submitFormHandle= (event)=>{
        event.preventDefault()
        editPerson(person)
        changeEditMode(false)
    }
    const renderEditButton = ()=>{
        if (activePerson !==person.id || editMode || addAlbum || addPost) return null
        return(
            <div className="w-100">
                <button onClick={editButtonHandle} className="btn w-100 mb-1 btn-success">Edit</button>
                <button onClick={clickAddNewAlbumHandle} className="btn w-100 mb-1 btn-info">Add Album</button>
                <button onClick={addBlogButtonHandle} className="btn w-100 mb-1 btn-info">Add Post</button>
            </div>
        )
    }
    const editButtonHandle = event=>{
        event.preventDefault()
        changeEditMode(true)
    }
    const clickAddNewAlbumHandle = event=>{
        event.preventDefault()
        setAddAlbum(true)
    }

    const addBlogButtonHandle = (event)=>{
        event.preventDefault()
        setAddPost(true)
    }

    const addNewPostHandle = (formData)=>{
        addNewPost(formData)
        setAddPost(false)
    }

    const renderPersonInfo = ()=>{
        if(addAlbum){
            return(<AddAlbum onFinish={addNewAlbumHandle}/>)
        }

        if(addPost){
            return(<AddPost onFinish={addNewPostHandle}/>)
        }
        return(
            <div>
                <PersonalAlbums personId={+id}/>
                <PersonalBlog personId={+id}/>
            </div>
        )
    }

    const addNewAlbumHandle = (formData)=>{
        addNewAlbum(formData)
        setAddAlbum(false)
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-6 col-sm-4">
                    {renderProfile()}
                </div>
                <div className="col-6 col-sm-8">
                    {renderPersonInfo()}
                </div>
            </div>

        </section>
    )
}

const mapStateToProps= (state)=>{
    return{
        activePerson:+state.persons.activePerson,
        editMode:state.persons.editMode
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        changeEditMode:(editMode)=>dispatch({type:CHANGE_EDIT_MODE, payload:editMode}),
        editPerson: (person) => dispatch({type:EDIT_PERSON, payload: person})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonProfile)