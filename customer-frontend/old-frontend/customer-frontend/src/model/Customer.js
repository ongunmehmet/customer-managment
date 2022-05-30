export default class Customer {
    constructor(customer
                    = {

        costumerId:"aaaa1",
        companyName: null,
        phone: null,
        email: null,
        sector: null,
        city: null,
        district: null,
        taxAdmistrationCity: null,
        taxAdmistrationName: null,
        taxNo: null,
    }) {
        this.costumerId=customer.costumerId;
        this.companyName = customer.companyName;
        this.phone = customer.phone;
        this.email = customer.email;
        this.sector = customer.sector;
        this.city = customer.city;
        this.district = customer.district;
        this.taxAdmistrationCity = customer.taxAdmistrationCity;
        this.taxAdmistrationName = customer.taxAdmistrationName;
        this.taxNo = customer.taxNo;
    }
};