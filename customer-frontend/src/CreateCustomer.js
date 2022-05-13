import './App.css';
import CardHeader from "./components/card-header";
import Card from "./components/card";
import CardBody from "./components/card-body";
import Container from "./components/container";
import Input from "./components/Input";
import Button from "./components/Button";
import {useEffect, useState} from "react";
import Customer from "./model/Customer";
import CustomerService from "./service/CustomerService";
import SelectBox from "./components/Selectbox";
import City from './il-ilce.json'


function CreateCustomer() {
    const SECTORS = ["SOFtWARE", "ARM"]
    const customerService = new CustomerService();

    let [customer, setCustomer] = useState(new Customer());
    let [customers, setCustomers] = useState([]);
    let [districts, setDistricts] = useState([]);
    let [dataCitiesAndDistricts, setDataCitiesAndDistricts] = useState(City.data);



    useEffect(()=> {
        dataCitiesAndDistricts.map((item, index) => {
            if (item.il_adi === customer.city) {
                //  console.log(item["ilceler"])
                setDistricts(item["ilceler"])
            }
           if ((customer.city==="")){

               if(item["il_adi"]==="Adana")

                   setDistricts(item["ilceler"])
               console.log(item["ilceler"])

            }
        })
    })
    function handleInputChange(event) {

        customer.city="";
        customer.district="";
        let newCustomer = {...customer};
        const {name, value} = event.target;
        newCustomer[name] = value;
        setCustomer(newCustomer);


        console.log("il"+customer.city);
        console.log("ilçe:"+customer.district);
    }

    function customerSave(event) {

        customerService.addCustomer({...customer})
            .then(res => {
                // if(res.status.toLowerCase()==='ok')
                // {
                //   console.log("Kayıt başarılı")
                // }
                alert(res.companyName);
            });


    }

    function customerSaveCancel(event) {

    }

    return (

        <Container style={{width: 450}}>

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

                    <SelectBox
                        id="city"
                        options={dataCitiesAndDistricts}
                        handleChange={handleInputChange}
                        value={customer.city}
                        label="İl"
                        keyName="il_adi"
                    />
                    <SelectBox
                        id="district"
                        options={districts}
                        handleChange={handleInputChange}
                        value={customer.city}
                        label="İlçe"
                        keyName="ilce_adi"
                    />
                    <Input id="taxNo"
                           handleChange={handleInputChange}
                           value={customer.taxNo}
                           label="Vergi Numarası">
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

