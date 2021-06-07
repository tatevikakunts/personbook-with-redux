import React, {useContext} from "react";
import {GlobalContext} from "../App";


const Like = ({photo})=>{

const {addPhotoReaction }= useContext(GlobalContext)
    const incr = (event)=>{
    addPhotoReaction(photo.id,1)
    }
    const decr = (event)=>{
    addPhotoReaction(photo.id, -1)
    }
    return(
        <div>
            <button onClick={incr} name="like">Like ({photo.like})</button>
            <button onClick={decr} name="dislike">Dislike ({photo.dislike})</button>
        </div>

    )
}
export default Like