import './App.css';
import Card from "./components/card";
import CardHeader from "./components/card-header";
import CardBody from "./components/card-body";
import Input from "./components/Input";
import {useState} from "react";
import Customer from "./model/Customer";
import Button from "./components/Button";
import Container from "./components/container";
import CustomerService from "./service/CustomerService";

function Customers() {
    const [customer, setCustomer] = useState(new Customer());
    const [customers, setCustomers] = useState([]);
    const customerService=new CustomerService();





     function customerList(customers) {
        setCustomers( customerService.getAllCustomers());
        //console.log(customers);

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
                                (cus,index)=>(
                                    <tr key={cus.costumerId} >
                                        <td><h6>{index+1}</h6></td>
                                        <td><h6>{cus.companyName}</h6></td>
                                        <td><h6>{cus.taxNo}</h6></td>
                                        <td><h6>{cus.email}</h6></td>
                                        <td><h6>{cus.phone}</h6></td>
                                        <td><h6>{cus.sector}</h6></td>
                                        <td>
                                            <Button id="chooseButton"
                                                    label="İşlemler"
                                                    className="btn-primary"
                                                    onClick={chooses}>
                                            </Button>

                                            <div className="btn-group" role="group"
                                                 aria-label="Button group with nested dropdown">

                                                <div className="btn-group" role="group">
                                                    <button id="btnGroupDrop1" type="button"
                                                            className="btn btn-secondary dropdown-toggle"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        İşlemler
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                        <a className="dropdown-item" href="#">SİL</a>
                                                        <a className="dropdown-item" href="#">GÜNCELLE</a>
                                                    </div>
                                                </div>
                                            </div>

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
        let newInputCustomer = {...customer};
        newInputCustomer[name] = value;
        setCustomer(newInputCustomer);
    }

    let searchCustomer;
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
                                       value={customer.companyName}
                                       handleChange={handleInputChange}
                            />
                            </td>

                            <td>

                                <Input id="taxtNo"
                                       value={customer.taxNo}
                                       handleChange={handleInputChange}
                                />
                            </td>
                            <td>

                                <Input id="sector"
                                       value={customer.sector}
                                       handleChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <Button id="search"
                                        label="Ara"
                                        className="btn-primary"
                                        onClick={searchCustomer}>
                                </Button>
                            </td>
                            <td>
                                <Button id="newCust"
                                        label="Yeni Müşteri Ekle"
                                        className="btn-success"
                                        onClick={newCustomer}>
                                </Button>
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
