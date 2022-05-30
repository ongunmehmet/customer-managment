import React from "react";

export default function Container(props){
    return (
        <div className="container" style={props.style}>
            {props.children}
        </div>
    );
}
