import {useState} from "react";

const API_URL = "http://localhost:2001/customer/api/v1/customers/add2";
//const [newCustomer , setNewCustomer]=useState([]);

export default class CustomerService {
    constructor() {
    }

    addCustomer = async (customer) => {

        return fetch(
            API_URL,
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
        // return fetch(
        //     API_URL,
        //     {
        //         method: "PUT",
        //         headers: {
        //             "Accept": "application/json",
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(customer)
        //     }
        // ).then(response => response.json());
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

            return fetch(
                API_URL,
                {
                    method:"GET",
                    headers:{
                        "Accept":"application/json"
                    }
                }
            ).then(response=>response.json());
    }
}