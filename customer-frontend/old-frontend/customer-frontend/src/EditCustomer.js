import './App.css';
import CardHeader from "./components/card-header";
import Card from "./components/card";
import CardBody from "./components/card-body";
import Container from "./components/container";
import Input from "./components/Input";
import Button from "./components/Button";
import {Component, useEffect, useState} from "react";
import Customer from "./model/Customer";
import CustomerService from "./service/CustomerService";
import SelectBox from "./components/Selectbox";
import City from './il-ilce.json'
import TaxAdmistration from "./taxAdmistrations.json"
import {useLocation} from "react-router-dom";


function EditCustomer() {
    const  {state}=useLocation();
     //const {data}=this.props.location
    const sectors = [{name: "Software"}, {name: "IT"}, {name: "ARM"}, {name: "SCDL"}, {name: "DCLT"},]
    const customerService = new CustomerService();

    let [customer, setCustomer] = useState(state.customer);
    let [cityDistricts, setCityDistricts] = useState([]);
    let [cityTaxAdmistrations, setCityTaxAdmistrations] = useState([]);
    let [dataCitiesAndDistricts, setDataCitiesAndDistricts] = useState(City.data);
    let [taxAdmistrations, setTaxAdmistrations] = useState(TaxAdmistration.data);


    useEffect(() => {

        dataCitiesAndDistricts.map(city => {

            if (city.il_adi === customer.city) {

                let ilce = {}
                let ilceler = []
                city["ilceler"].map(ilce => {
                    ilce = {ilce_adi: ilce.ilce_adi}
                    ilceler.push(ilce)

                    return setCityDistricts(ilceler)
                })
                return 1

            }
        })


    }, [customer.city]);

    useEffect(()=>{
        // console.log("link"+data)
         console.log("navigator"+state.customer)

    },[])

    useEffect(() => {
        dataCitiesAndDistricts.map(city => {

            if (city.il_adi === customer.taxAdmistrationCity) {

                let cityCode = city.plaka_kodu;

                taxAdmistrations.map(tax => {

                    if (tax.cityCode === cityCode) {
                        return setCityTaxAdmistrations(tax["taxAdmistrations"])
                    }
                    return 1
                })

            }
        })
    }, [customer.taxAdmistrationCity])


    function handleInputChange(event) {
        let newCustomer = {...customer};
        const {name, value} = event.target;
        newCustomer[name] = value;
        setCustomer(newCustomer);

        console.log(customer);
    }

    function customerUpdate(event) {

        customerService.updateCustomer({...customer})
            .then(res => {
                if (res.status.toLowerCase() === 'ok') {
                    console.log("Update başarılı")
                }
                alert(res);
            });


    }

    function customerUpdateCancel(event) {

    }

    function onChangeTax(event) {

        console.log("")
    }


    return (

        <Container style={{width: 450}}>

            <Card>

                <CardHeader title="Düzenle "> </CardHeader>
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
                    <SelectBox
                        id="sector"
                        options={sectors}
                        handleChange={handleInputChange}
                        value={customer.sector}
                        label="Sector"
                        keyName="name"
                    />

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
                        options={cityDistricts}
                        handleChange={handleInputChange}
                        value={customer.district}
                        label="İlçe"
                        keyName="ilce_adi"
                    />
                    <SelectBox
                        id="taxAdmistrationCity"
                        options={dataCitiesAndDistricts}
                        handleChange={handleInputChange}
                        value={customer.taxAdmistrationCity}
                        label="Vergi Dairesi İli"
                        keyName="il_adi"
                    />
                    <SelectBox
                        id="taxAdmistrationName"
                        options={cityTaxAdmistrations}
                        handleChange={handleInputChange}
                        value={customer.taxAdmistrationName}
                        label="Vergi Dairesi Adı"
                        keyName="taxAdmistrationName"
                    />

                    <Input id="taxNo"
                           handleChange={handleInputChange}
                           value={customer.taxNo}
                           label="Vergi Numarası">
                    </Input>

                    <div className="input-group"></div>
                    <span className="form-label"></span>
                    <Button id="save"
                            label="Güncelle"
                            className="btn-success"
                            onClick={customerUpdate}
                            link="">
                    </Button>
                    <Button id="Cancel"
                            label="Vazgeç"
                            className="btn-outline-success"
                            onClick={customerUpdateCancel}
                            link="customers">
                    </Button>
                </CardBody>
            </Card>


        </Container>
    );
}

export default EditCustomer;

