import logo from './logo.svg';
import './App.css';
import CardHeader from "./components/card-header";
import Card from "./components/card";
import CardBody from "./components/card-body";
import Container from "./components/container";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import {useState} from "react";
import Employee from "./model/Customer";


function Hr() {
    const SECTORS=["SOFtWARE","ARM"]
    let[customer,setCustomer]=useState(new Employee());
    let[customers,setCustomers]=useState(new Array());

    function handleInputchange(event){

    }
    function customerSave(event) {

    }

    function customerSaveCancel(event) {

    }

    return (

        <Container>

            <Card>

                <CardHeader title="customer"> </CardHeader>
                <CardBody>
                    <Input id="companyName"
                           handleChange={handleInputChange}
                           value={}
                           label="Company Name">
                    </Input>
                    <Input id="phone"
                           handleChange={handleInputChange}
                           value={}
                           label="Phone">
                    </Input>
                    <Input id="e-mail"
                           handleChange={handleInputChange}
                           value={}
                           label="E-Mail">
                    </Input>
                    <Input id="sector"
                           handleChange={handleInputChange}
                           value={}
                           label="Sektör">
                    </Input>
                    <Checkbox id="city"
                              handleChange={handleInputChange}
                              value={}
                              label="İl Seçiniz">
                    </Checkbox>
                    <Checkbox id="district"
                              handleChange={handleInputChange}
                              value={}
                              label="İlçe Seçiniz">
                    </Checkbox>

                    <Checkbox id="taxAdmistrationCity"
                              handleChange={handleInputChange}
                              value={}
                              label="Vergi Dairesi İli">
                    </Checkbox>

                    <Input id="taxNo"
                           handleChange={handleInputChange}
                           value={}
                           label="Vergi  Numarası">
                    </Input>
                    <Input id="registrationNo"
                           handleChange={handleInputChange}
                           value={}
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

export default Hr;

