import React from 'react';
import { Button } from "primereact/button";
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Invoice = () => {

	const print = () => {
		window.print();
	}

	const billData = [
		{
			'billTo': 'TOYOKSU SYSCOM CORPORATION 11-27, MEIEKI 4-CHROME NAKAMURA-KU, NAGOYA 450-0002 JAPAN',
			'date': '30/08/2021',
			'no': 'A/3100',
			'notes': 'N/A'
		}
	];

	const billCols = [
		{ field: 'billTo', header: 'BILL TO' },
		{ field: 'date', header: 'DATE' },
		{ field: 'no', header: 'INVOICE NO' },
		{ field: 'notes', header: 'NOTES' }
	];

	const productData = [
		{
			'description': 'License A',
			'quantity': '4',
			'price': '$99.00',
			'total': '$396.00'
		},
		{
			'description': 'License B',
			'quantity': '1',
			'price': '$790.00',
			'total': '$790.00'
		},
		{
			'description': 'License C',
			'quantity': '2',
			'price': '$59.00',
			'total': '$118.00'
		}
	];

	const productCols = [
		{ field: 'description', header: 'DESCRIPTION' },
		{ field: 'quantity', header: 'QUANTITY' },
		{ field: 'price', header: 'UNIT PRICE' },
		{ field: 'total', header: 'LINE TOTAL' }
	];

	return (
		<div className="layout-invoice-page">
			<Button type="button" label="Print" icon="pi pi-print" onClick={print} className="mb-3"></Button>

			<div className="grid layout-invoice-content">
				<div className="col-12">
					<div className="card">
						<div className="flex justify-content-between">
							<h5>INVOICE</h5>
							<div className="flex flex-column align-items-end">
								<img src="assets/layout/images/extensions/prime-logo.svg" alt="invoice-logo" />
								<p className="mt-1">9137 3rd Lane California City, CA 93504.</p>
							</div>
						</div>

						<div className="p-3">
							<DataTable value={billData} className="p-invoice-datatable-responsive pb-3">
								{
									billCols.map((billCol, i) => {
										return <Column key={i} field={billCol.field} header={billCol.header}></Column>
									})
								}
							</DataTable>

							<DataTable value={productData} className="p-invoice-datatable-responsive p-datatable-sm py-6">
								{
									productCols.map((productCol, i) => {
										return <Column key={i} field={productCol.field} header={productCol.header}></Column>
									})
								}
							</DataTable>

							<div className="grid">
								<div className="col-12 md:col-6">
									<Panel header="BANK">
										<div className="flex align-items-center justify-content-between py-2">
											<span>Bank</span>
											<span className="font-bold">BestBank</span>
										</div>
										<div className="flex align-items-center justify-content-between pt-2 py-2">
											<span>ACCOUNT BENEFICIARY</span>
											<span className="font-bold">Edward Williams</span>
										</div>
										<div className="flex align-items-center justify-content-between pt-2 py-2">
											<span>SWIFT</span>
											<span className="font-bold">PJNWBXND</span>
										</div>
										<div className="flex align-items-center justify-content-between pt-2 py-2">
											<span>IBAN</span>
											<span className="font-bold">GB04420235692263866724650931</span>
										</div>
									</Panel>
								</div>
								<div className="col-12 md:col-6">
									<Panel header="TOTAL">
										<div className="grid text-right">
											<div className="col-10">
												SUBTOTAL
										</div>
											<div className="col-2">
												<span className="pink-color">$1304.00</span>
											</div>

											<div className="col-10">
												<span>VAT</span>
											</div>
											<div className="col-2">
												<span className="pink-color">$234.72</span>
											</div>

											<div className="col-10">
												<span>TOTAL</span>
											</div>
											<div className="col-2">
												<span className="pink-color">$1538.72</span>
											</div>
										</div>
									</Panel>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Invoice, comparisonFn);
