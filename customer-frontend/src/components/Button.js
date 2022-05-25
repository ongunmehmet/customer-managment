import {Link, useNavigate} from "react-router-dom";
import customers from "../Customers";
import {useEffect} from "react";

export default function Button(props) {
const navigate=useNavigate();
function postNavigate(){
  return   navigate('/'+ props.link,{
        state:{data:1}
    })
}
// useEffect(()=>{})

    return (

        <button className={'btn '.concat(props.className) + " badge-danger"}
                id={props.id}
                value={props.value}
                onClick={()=>{link2}}

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
      //  case "update":{return postNavigate()}
        //case "editOneCustomer":{return postNavigate()}

        default: {

            // return postNavigate()
            return <Link className=" text-decoration-none" to={{
                pathname: "/" + link,
                data: "11111111111111"
            }}> {props.label}</Link>
        }

    }

}}