import React from "react";

export default function Card(props){
    return (
        <div className="card" style={props.style}>
            {props.children}


        </div>
    );
}
