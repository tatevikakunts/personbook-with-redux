import {ADD_NEW_PERSON, CHANGE_ACTIVE_PERSON, CHANGE_EDIT_MODE, DELETE_PERSON, EDIT_PERSON} from "./typesList"
import {FETCH_PERSONS} from "./typesList"

const stateInit = {
    persons:{
        list:[],
        activePerson:null,
        editMode:false
    }
}

const reducer =(state= stateInit, action)=>{
    switch (action.type){
        case FETCH_PERSONS:
            return{...state, persons: {...state.persons, ...action.payload}}
        case ADD_NEW_PERSON:
            return{...state, persons:{...state.persons, list:[...state.persons.list, action.payload]}}
        case CHANGE_ACTIVE_PERSON:
            return{...state, persons:{...state.persons, activePerson: action.payload }}
        case DELETE_PERSON:
            const idx = state.persons.list.findIndex(p=>p.id ===action.payload)
            if(idx===-1) return state
            const _arr = [...state.persons.list]
            _arr.splice(idx,1)
            return {...state, persons:{...state.persons, list:_arr}}
        case CHANGE_EDIT_MODE:
            return{...state, persons:{...state.persons, editMode: action.payload}}
        case EDIT_PERSON:
            return {...state, persons:{...state.persons, list:{...state.persons.list, ...action.payload}}}



        default:
            return state
    }
}
export default reducer