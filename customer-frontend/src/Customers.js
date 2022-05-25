import './App.css';
import Card from "./components/card";
import CardHeader from "./components/card-header";
import CardBody from "./components/card-body";
import Input from "./components/Input";
import {useEffect, useState} from "react";
import Button from "./components/Button";
import Container from "./components/container";
import CustomerService from "./service/CustomerService";
import FindCustomersRequest from "./dto/request/FindCustomersRequest";


function Customers() {
    const [findCustomer, setFindCustomer] = useState(new FindCustomersRequest());
    const [customers, setCustomers] = useState([]);
    const [updateCustomer, setUpdateCustomer] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        fetchData();
    })

    async function fetchData() {
        //  console.log("başla:")
        setCustomers(await customerService.getAllCustomers());
        //console.log(customers)
    }

    function editOneCustomer(cus) {

        console.log(cus)
        customerService.updateCustomer(cus).then(alert);

    }

    function deleteOneCustomer(customerId) {

        customerService.deleteOneCustomer(customerId)
            .then(alert);
    }

    function handleUpdate(event) {
        const {name, value} = event.target();
        console.log(value)
        if (name === "edit")
            setUpdateCustomer(value)

    }

    function customerList(customers) {


        return (

            <Card>
                <CardHeader title="Müşteri Listesi"></CardHeader>
                <CardBody>
                    <table className="table table-hover  table-striped table-bordered table-responsive">
                        <thead>
                        <tr>
                            <th><h6>Sıra No</h6></th>
                            <th><h6>Firma Adı</h6></th>
                            <th><h6>Vergi Numarası</h6></th>
                            <th><h6>E-Mail</h6></th>
                            <th><h6>Telefon</h6></th>
                            <th><h6>Sektör</h6></th>
                            <th><h6>İşlem</h6></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            customers.map(
                                (cus, index) => (
                                    <tr key={cus.costumerId}>
                                        <td><h6>{index + 1}</h6></td>
                                        <td><h6>{cus.companyName}</h6></td>
                                        <td><h6>{cus.taxNo}</h6></td>
                                        <td><h6>{cus.email}</h6></td>
                                        <td><h6>{cus.phone}</h6></td>
                                        <td><h6>{cus.sector}</h6></td>
                                        <td>

                                            <Button id="edit"
                                                    label="Düzenle"
                                                    onClick={() => editOneCustomer(cus)}
                                                    className="btn-primary"
                                                    link="editOneCustomer"

                                            > </Button>
                                            <Button id="update"
                                                    label="update"

                                                    className="btn-primary"
                                                    link="update"

                                            > </Button>

                                            <Button id="delete"
                                                    label="Sil"
                                                    onClick={() => deleteOneCustomer(cus.customerId)}
                                                    className="btn-danger"
                                                    link=""
                                            />

                                        </td>

                                    </tr>
                                )
                            )

                        }
                        </tbody>
                    </table>
                </CardBody>
            </Card>

        );

    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        let newInputCustomer = {...findCustomer};
        newInputCustomer[name] = value;
        setFindCustomer(newInputCustomer);

        console.log(findCustomer)
    }

    function searchCustomer(event) {
        customerService.findCustomers(findCustomer)
    }

    let newCustomer;
    let chooses;
    return (
        <Container style={{width: 1100}}>


            <Card>
                <CardHeader title="Müşteri Havuzu"></CardHeader>
                <CardBody>
                    <table>
                        <thead>
                        <tr>
                            <th><h6>Firma Adı</h6></th>
                            <th><h6>Vergi Numarası</h6></th>
                            <th><h6>Sector</h6></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input id="companyName"
                                       value={findCustomer.companyName}
                                       handleChange={handleInputChange}
                            />
                            </td>

                            <td>

                                <Input id="taxtNo"
                                       value={findCustomer.taxNo}
                                       handleChange={handleInputChange}
                                />
                            </td>
                            <td>

                                <Input id="sector"
                                       value={findCustomer.sector}
                                       handleChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <Button id="search"
                                        label="Ara"
                                        className="btn-primary"
                                        onClick={searchCustomer}
                                        link={""}
                                />
                            </td>
                            <td>
                                <Button id="newCust"
                                        label="Yeni Müşteri Ekle"
                                        className="btn-success"
                                        link="createOneCustomer"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </CardBody>
            </Card>

            {/*line*/}

            <div className="container-sm bg-primary ">
                <div className="row ">
                    <p></p>
                </div>
            </div>
            {/*line*/}

            {customerList([...customers])}


        </Container>
    );
}

export default Customers;
