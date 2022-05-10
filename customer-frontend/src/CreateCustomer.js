import logo from './logo.svg';
import './App.css';
import CardHeader from "./components/card-header";
import Card from "./components/card";
import CardBody from "./components/card-body";
import Container from "./components/container";
import Input from "./components/Input";
import DropDownList from "./components/DropDownList";
import Button from "./components/Button";
import {useState} from "react";
import Employee from "./model/Customer";
import Dropdown from "bootstrap/js/src/dropdown";


function CreateCustomer() {
    const SECTORS=["SOFtWARE","ARM"]
    let[customer,setCustomer]=useState(new Employee());
    let[customers,setCustomers]=useState([]);

    function handleInputChange(event){
        let  newCustomer={...customer};
        const {name,value}=event.target;
        newCustomer[name]=value;
        setCustomer(newCustomer);
    }
    function customerSave(event) {

    }

    function customerSaveCancel(event) {

    }

    return (

        <Container>

            <Card>

                <CardHeader title="Yeni Müşteri "> </CardHeader>
                <CardBody>
                    <Input id="companyName"
                           handleChange={handleInputChange}
                           value={customer.companyName}
                           label="Company Name">
                    </Input>
                    <Input id="phone"
                           handleChange={handleInputChange}
                           value={customer.phone}
                           label="Phone">
                    </Input>
                    <Input id="email"
                           handleChange={handleInputChange}
                           value={customer.email}
                           label="E-Mail">
                    </Input>
                    <Input id="sector"
                           handleChange={handleInputChange}
                           value={customer.sector}
                           label="Sektör">
                    </Input>
                    <DropDownList id="city"
                              handleChange={handleInputChange}
                              value={customer.city}
                              label="İl Seçiniz">
                    </DropDownList>
                    <DropDownList id="district"
                              handleChange={handleInputChange}
                              value={customer.district}
                              label="İlçe Seçiniz">
                    </DropDownList>

                    <DropDownList id="taxAdmistrationCity"
                              handleChange={handleInputChange}
                              value={customer.taxAdmistrationCity}
                              label="Vergi Dairesi İli">
                    </DropDownList>

                    <Input id="taxNo"
                           handleChange={handleInputChange}
                           value={customer.taxNo}
                           label="Vergi Numarası">
                    </Input>
                    <Input id="registrationNo"
                           handleChange={handleInputChange}
                           value={customer.registrationNo}
                           label="Sicil Numarası">
                    </Input>
                    <div className="input-group"></div>
                    <span className="form-label"></span>
                    <Button id="save"
                            label="KAYDET"
                            className="btn-success"
                            onClick={customerSave}>
                    </Button>
                    <Button id="Cancel"
                            label="Vazgeç"
                            className="btn-close-white"
                            onClick={customerSaveCancel}>
                    </Button>
                </CardBody>
            </Card>


        </Container>
    );
}

export default CreateCustomer;

