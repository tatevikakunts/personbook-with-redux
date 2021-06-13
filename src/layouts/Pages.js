import React from "react";
import {Switch, Route} from "react-router-dom"
import AddNewPerson from "../components/Persons/AddNewPerson";
import Home from "../components/Home";
import Persons from "../components/Persons/Persons";
import PersonProfile from "../components/Persons/PersonProfile";
import Albums from "../components/Albums/Albums";
import Album from "../components/Albums/Album";

const Pages = ()=>{
    return(
        <Switch>
            <Route exact={true} path="/">
                <Home/>
            </Route>
            <Route exact={true} path="/persons">
                <Persons/>
            </Route>
            <Route path="/persons/add">
                <AddNewPerson/>
            </Route>
            <Route path="/persons/:id">
                <PersonProfile/>
            </Route>
            <Route exact={true} path="/albums">
                <Albums/>
            </Route>
            <Route path="/albums/:id">
                <Album/>
            </Route>
        </Switch>
    )
}
export default Pages