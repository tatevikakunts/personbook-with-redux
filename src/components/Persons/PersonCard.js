import React from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"
import {deletePerson} from "../../store/actions/persons"

const PersonCard = ({person, deleteElement, activePersonId})=>{
    let history = useHistory()
    const clickOpenProfileHandle = (event)=>{
        event.preventDefault()
        history.push(`/persons/${person.id}`)
    }

    const deleteHandle = (event)=>{
        event.preventDefault()
        deleteElement(person.id)
    }


    return(
            <div className="col-6 col-sm-4 col-md-3">
                <div className="card" >
                    <img src={person.avatar} className="card-img-top" alt="{person.fName} {person.lName}"/>
                        <div className="card-body">
                            <h5 className="card-title">{person.fName} {person.lName}</h5>
                            <a href="#" onClick={clickOpenProfileHandle} className="btn btn-primary">Open Profile</a>
                            {activePersonId === person.id && 1===2 ? <a href="#" onClick={deleteHandle} className="btn btn-danger">Delete Profile</a>:null}

                        </div>
                </div>
            </div>

    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        deleteElement:personId =>dispatch(deletePerson(personId))
    }
}

const mapStateToProps = (state)=>{
    return{
        activePersonId:state.persons.activePerson
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (PersonCard)