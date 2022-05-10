import './App.css';
import Card from "./components/card";
import CardHeader from "./components/card-header";
import CardBody from "./components/card-body";
import Input from "./components/Input";
import {useState} from "react";
import Customer from "./model/Customer";
import Button from "./components/Button";

function Customers() {
    const [customer, setCustomer] = useState(new Customer());

    function handleInputChange(event) {
        const {name, value} = event.target;
        let newInputCustomer = {...customer};
        newInputCustomer[name] = value;
        setCustomer(newInputCustomer);
    }

    let searchCustomer;
    let newCustomer;
    return (
        <Card style={{width:1200}}>
            <CardHeader title="Müşteri Havuzu"></CardHeader>
            <CardBody >
                <table>
                    <thead>
                    <tr>
                        <th><h6>Firma Adı</h6></th>

                        <th><h6>Sicil Numarası</h6></th>
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

                            <Input id="registrationNo"
                                   value={customer.registrationNo}
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
                                    className="btn-success"
                                    onClick={searchCustomer}>
                            </Button>
                        </td>
                        <td>
                            <Button id="newCust"
                                    label="Yeni Müşteri Ekle"
                                    className="btn-secondary"
                                    onClick={newCustomer}>
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </CardBody>
        </Card>

    );
}

export default Customers;
