import {useState} from "react";

const API_URL_ADD = "http://localhost:2001/customer/api/v1/customers/add2";
const API_URL_GETALL = "http://localhost:2001/customer/api/v1/customers";
const API_URL_DELETE = "http://localhost:2001/customer/api/v1/customers";
const API_URL_UPDATE = "http://localhost:2001/customer/api/v1/customers/update";
//const [newCustomer , setNewCustomer]=useState([]);


export default class CustomerService {
    constructor() {
    }

    addCustomer = async (customer) => {

        return fetch(
            API_URL_ADD,
            {
                method: "POST",
                headers: {
                     "Accept": "application/json",
                     "Content-Type": "application/json"

                }
                ,
                body: JSON.stringify(customer)
            }
        )
            .then(response => response.json());

    }

    updateCustomer = async (customer) => {
        return  await fetch(
            API_URL_UPDATE,
            {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(customer)
            }
        ).then(()=>alert("güncellendi"));
    }

    findCustomers = async (FindCustomers) => {
    //
    //     return fetch(
    //         `${API_URL}/findcus`,
    //         {
    //             method:"GET",
    //             headers:{
    //                 "Accept":"application/json"
    //             }
    //         }
    //     ).then(response=>response.json());
     }



    getAllCustomers = async () => {

            return await fetch(
                API_URL_GETALL,

                {
                    method:"GET",
                    headers:{
                        "Accept":"application/json",
                        "Content-Type": "application/json"
                    }
                }
            ).then(response=>response.json())
                ;
    }
    deleteOneCustomer = async (customerId) => {

            return fetch(
                API_URL_DELETE+"/"+customerId,
                {
                    method:"DELETE",
                    headers:{
                        "Accept":"application/json"
                    }
                }
            ).then(()=>alert("silindi"));
    }
    updateOneCustomer = async (customer) => {

            return fetch(
                API_URL_UPDATE,

                {
                    method:"PUT",
                    headers:{
                        "Accept":"application/json"
                    }
                    ,body:JSON.stringify(customer)
                }
            ).then(response=>response.json());
    }
}