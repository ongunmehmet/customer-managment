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


function CreateCustomer() {
    const SECTORS = ["SOFtWARE", "ARM"]
    const customerService = new CustomerService();
    const [flag, setFlag] = useState(false) //first init


    let [customer, setCustomer] = useState(new Customer());
    let [customers, setCustomers] = useState([]);
    let [districts, setDistricts] = useState([]);
    let [cities, setCities] = useState([]);
    let [choosedCityCode, setChoosedCityCode] = useState([]);
    let [cityDistricts, setCityDistricts] = useState([]);
    let [cityTaxAdmistrations, setCityTaxAdmistrations] = useState([]);
    let [dataCitiesAndDistricts, setDataCitiesAndDistricts] = useState(City.data);
    let [taxAdmistrations, setTaxAdmistrations] = useState(TaxAdmistration.data);
    let [taxAdmistrationNames, setTaxAdmistrationNames] = useState([]);


    useEffect(() => {

        dataCitiesAndDistricts.map((city, index) => {

            let dists=[];
            let taxs=[];
            city["ilceler"].map((district) => {
                let dist={districts:district.ilce_adi}
                 dists.push(dist)

            })
            taxAdmistrations.map((tax,index)=>{

                if(tax.cityCode===city.plaka_kodu){
                   // console.log( tax.cityCode, city.plaka_kodu)
                    tax["taxAdmistrations"].map((admis,index)=>{
                        let tax={taxAdmistrationName:admis.taxAdmistrationName}
                        taxs.push(tax)
                    })


                }

            })

            let newDataCityTaxes={city: city.il_adi,
                                  taxAdmistrations:taxs}

            let newDataCityDists={city: city.il_adi,
                                   districts:dists}
            //cityDists
            let data=[...cityDistricts]
            data.push({...newDataCityDists});
            setCityDistricts(data);

            //cityTaxAdmistrations
            data=[]
            data=[...cityTaxAdmistrations]
            data.push(({...newDataCityTaxes}))
            setCityTaxAdmistrations(data)
           // console.log(data);
        })



     console.log(cityTaxAdmistrations);
        setFlag(true);
    }, [flag === false]);

    useEffect(() => {
        dataCitiesAndDistricts.map((item, index) => {
            if (item.il_adi === customer.city) {
                //  console.log(item["ilceler"])
                setDistricts(item["ilceler"])
            }
        })
    }, [customer.city])
    taxAdmistrations.map((tax, index) => {
        if (customer.taxAdmistrationCity != null) {
            console.log("customer.taxAdmistrationCity" + customer.taxAdmistrationCity)


            // if (tax.cityCode === item.plaka_kodu)
            //
            //     // setTaxAdmistrationNames([])
            //
            //     console.log("tax.cityCode-" + tax.taxAdmistrations)
            setTaxAdmistrationNames(tax.taxAdmistrations);
        }
    })
    useEffect(() => {


    }, [customer.taxAdmistrationCity])

    function handleInputChange(event) {

        customer.city = "";
        customer.district = "";
        let newCustomer = {...customer};
        const {name, value} = event.target;
        newCustomer[name] = value;
        setCustomer(newCustomer);


        console.log(customer);
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

    function onChangeTax(event) {

        console.log("basıldı")
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
                        options={taxAdmistrationNames}
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

