import React from "react";

export default function CardHeader(props){
    return (
        <div className="card-header">
            <h4 className="card-title">{props.title}</h4>
        </div>
    );
}