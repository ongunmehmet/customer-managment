import React, {useState, useEffect, useRef} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CustomerService from "../service/CustomerService";
import {TreeSelect} from "primereact/treeselect";
import {Menu} from "primereact/menu";
import {Button} from "primereact/button";
import {ContextMenu} from "primereact/contextmenu";

const optionsButtonStyle ={
    display:'flex',
    width:'100%',

}

const overlayMenuItems = [

    {
        label: 'Edit',
        icon: 'pi pi-user-edit'
    },
    {
        separator: true
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash'
    },

];





const TableDemo = () => {
    const [customers, setCustomers] = useState([]);
    const menu = useRef(null);
    const contextMenu = useRef(null);

const Options = () => {
    return(
            <div>
                <Menu ref={menu} model={overlayMenuItems} popup />
                <Button type="button" label="Options" icon="pi pi-angle-down" onClick={toggleMenu} style={optionsButtonStyle} />
            </div>
           );

}


    const toggleMenu = (event) => {
        menu.current.toggle(event);
    };





    console.log(customers);

    let customerService=new CustomerService();

    useEffect(() => {
        getAll();
    }, []);

    async function getAll(){
         setCustomers(await  customerService.getAllCustomers());
    }



    return (
        <div className="grid table-demo">
            <div className="col-12">
                <div className="card">
                    <h5>Filter Menu</h5>
                    <DataTable value={customers} paginator className="p-datatable-gridlines" showGridlines rows={10}
                        dataKey="id"  filterDisplay="menu" responsiveLayout="scroll"
                        emptyMessage="No customers found.">
                        <Column field="companyName" header="Customer Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                        <Column header="Tax Number" field="taxNo" style={{ minWidth: '12rem' }}  filter filterPlaceholder="Search by taxNo"
                              />
                        <Column header="Email" field="email" style={{ minWidth: '14rem' }}/>
                        <Column header="Phone" field="phone"  style={{ minWidth: '10rem' }}/>
                        <Column header="Sector" field="sector" filterPlaceholder="Search by Sector"  style={{ minWidth: '10rem' }}  filter  />

                        <Column header="Processes"
                                body={Options}
                                style={{ minWidth: '10rem' }}   />

                    </DataTable>
                </div>
            </div>


        </div>

    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(TableDemo, comparisonFn);
