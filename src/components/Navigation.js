import React from "react";
import {NavLink} from "react-router-dom";

import SelectActivePerson from "./Persons/SelectActivePerson";

const Navigation = ()=>{

    return(

            <nav className="navbar navbar-expand navbar-dark bg-primary mb-3">
                <div className="container">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink exact={true} to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink exact={true} to="/persons">All persons</NavLink></li>
                    <li className="nav-item"><NavLink to="/persons/add">Add person</NavLink></li>
                    <li className="nav-item"><NavLink to="/albums">Albums</NavLink></li>
                </ul>
                    <SelectActivePerson/>

                </div>

            </nav>


    )

}


export default Navigation