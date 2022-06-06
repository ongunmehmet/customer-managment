const BASE_URL =
    "http://localhost:2001/customer/api/v1";

export default class CustomerService{


    getAllCustomers = async () => {
        return fetch(BASE_URL+"/customers",{
            headers: {
                "Accept": "application/json"
            }
        }).then( res => res.json());
    }
}

