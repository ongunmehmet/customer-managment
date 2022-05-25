import {Link, useNavigate} from "react-router-dom";
import customers from "../Customers";
import {useEffect} from "react";

export default function Button(props) {
const navigate=useNavigate();
// function postNavigate(){
//   return   navigate('/'+ props.link,{
//         state:{data:1}
//     })
// }
// useEffect(()=>{})

    return (

        <button className={'btn '.concat(props.className) + " badge-danger"}
                id={props.id}
                value={props.value}
                onClick={props.onClick}

        >

            {link2(props)}
        </button>
    );


function link2(props) {
    let link = props.link
    switch (props.link) {
        case "": {
            return (props.label)
        }


        default: {

            return <Link className="text-decoration-none" to={{
                pathname: "/" + link
            }}> {props.label}</Link>
        }

    }

}}