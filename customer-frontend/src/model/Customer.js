export default class Customer {
    constructor(customer
                    = {

        companyName: "",
        phone: "",
        email: "",
        sector: "",
        city: "",
        district: "",
        taxAdmistrationCity: "",
        taxAdmistrationName: "",
        taxNo: "",
        registrationNo: ""
    }) {
        this.companyName = customer.companyName;
        this.phone = customer.phone;
        this.email = customer.email;
        this.sector = customer.sector;
        this.city = customer.city;
        this.district = customer.district;
        this.taxAdmistrationCity = customer.taxAdmistrationCity;
        this.taxAdmistrationName = customer.taxAdmistrationName;
        this.taxNo = customer.taxNo;
        this.registrationNo = customer.registrationNo;
    }
};