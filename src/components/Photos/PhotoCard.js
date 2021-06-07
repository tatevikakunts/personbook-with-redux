import React from "react";
import Like from "./Like";

const PhotoCard = ({photo})=>{
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={photo.src} alt={photo.title}/>
                <div className="card-body">
                    <p className="card-title">{photo.title}</p>
                    <div className="card-text">
                        <Like photo={photo}/>

                    </div>
                </div>
            </div>
        </div>

    )
}
export  default PhotoCard