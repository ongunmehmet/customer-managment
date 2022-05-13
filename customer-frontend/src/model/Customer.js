export default class Customer {
    constructor(customer
                    = {

        costumerId:"aaaa1",
        companyName: "SAHBT",
        phone: "0555",
        email: "sahbt@",
        sector: "bilişim",
        city: "",
        district: "",
        taxAdmistrationCity: "İSTANBUL",
        taxAdmistrationName: "CVK",
        taxNo: "AS789848A",
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