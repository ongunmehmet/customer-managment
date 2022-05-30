import React from "react";

export default function CardHeader(props){
    return (
        <div className="card-header">

            <div className="jumbotron  jumbotron-fluid">
                <h1 className="display-6">   {props.title }</h1>
            </div>
        </div>
    );
}