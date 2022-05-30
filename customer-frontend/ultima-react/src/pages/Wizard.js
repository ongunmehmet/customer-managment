import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";

const Wizard = () => {

	const [activeTab, setActiveTab] = useState('register');
	const [activeCard, setActiveCard] = useState('');
	const [dropdownHear, setDropdownHear] = useState(null);
	const [dropdownTime, setDropdownTime] = useState(null);
	const [group1, setGroup1] = useState(null);
	const [date, setDate] = useState(null);
	const [checked, setChecked] = useState(false)

	const dropdownOptions = [
		{ label: 'Select Time Zone', value: null },
		{ label: 'UTC-12.00', value: { id: 1, name: 'UTC-12.00', code: '-12' } },
		{ label: 'UTC-11.00', value: { id: 2, name: 'UTC-11.00', code: '-11' } },
		{ label: 'UTC-10.00', value: { id: 3, name: 'UTC-10.00', code: '-10' } },
		{ label: 'UTC-09.30', value: { id: 4, name: 'UTC-09.30', code: '-93' } },
		{ label: 'UTC-09.00', value: { id: 5, name: 'UTC-09.00', code: '-09' } },
		{ label: 'UTC-08.00', value: { id: 6, name: 'UTC-08.00', code: '-08' } },
		{ label: 'UTC-07.00', value: { id: 7, name: 'UTC-07.00', code: '-07' } },
		{ label: 'UTC-06.00', value: { id: 8, name: 'UTC-06.00', code: '-06' } },
		{ label: 'UTC-05.00', value: { id: 9, name: 'UTC-05.00', code: '-05' } },
		{ label: 'UTC-04.00', value: { id: 10, name: 'UTC-04.00', code: '-04' } },
		{ label: 'UTC-03.30', value: { id: 11, name: 'UTC-03.30', code: '-33' } },
		{ label: 'UTC-03.00', value: { id: 12, name: 'UTC-03.00', code: '-03' } },
		{ label: 'UTC-02.00', value: { id: 13, name: 'UTC-02.00', code: '-02' } },
		{ label: 'UTC-01.00', value: { id: 14, name: 'UTC-01.00', code: '-01' } },
		{ label: 'UTC-+00.00', value: { id: 15, name: 'UTC-+00.00', code: '-00' } },
		{ label: 'UTC+01.00', value: { id: 16, name: 'UTC+01.00', code: '+01' } },
		{ label: 'UTC+02.00', value: { id: 17, name: 'UTC+02.00', code: '+02' } },
		{ label: 'UTC+03.00', value: { id: 18, name: 'UTC+03.00', code: '+03' } },
		{ label: 'UTC+03.30', value: { id: 19, name: 'UTC+03.30', code: '+33' } },
		{ label: 'UTC+04.00', value: { id: 20, name: 'UTC+04.00', code: '+04' } },
		{ label: 'UTC+04.30', value: { id: 21, name: 'UTC+04.30', code: '+43' } },
		{ label: 'UTC+05.00', value: { id: 22, name: 'UTC+05.00', code: '+05' } },
		{ label: 'UTC+05.30', value: { id: 23, name: 'UTC+05.30', code: '+53' } },
		{ label: 'UTC+05.45', value: { id: 24, name: 'UTC+05.45', code: '+54' } },
		{ label: 'UTC+06.00', value: { id: 25, name: 'UTC+06.00', code: '+06' } },
		{ label: 'UTC+06.30', value: { id: 26, name: 'UTC+06.30', code: '+63' } },
		{ label: 'UTC+07.00', value: { id: 27, name: 'UTC+07.00', code: '+07' } },
		{ label: 'UTC+08.00', value: { id: 28, name: 'UTC+08.00', code: '+08' } },
		{ label: 'UTC+08.45', value: { id: 29, name: 'UTC+08.45', code: '+84' } },
		{ label: 'UTC+09.00', value: { id: 30, name: 'UTC+09.00', code: '+09' } },
		{ label: 'UTC+09.30', value: { id: 31, name: 'UTC+09.30', code: '+93' } },
		{ label: 'UTC+10.00', value: { id: 32, name: 'UTC+10.00', code: '+10' } },
		{ label: 'UTC+10.30', value: { id: 33, name: 'UTC+10.30', code: '+13' } },
		{ label: 'UTC+11.00', value: { id: 34, name: 'UTC+01.00', code: '+11' } },
		{ label: 'UTC+12.00', value: { id: 35, name: 'UTC+01.00', code: '+12' } },
		{ label: 'UTC+12.45', value: { id: 36, name: 'UTC+01.00', code: '+24' } },
		{ label: 'UTC+13.00', value: { id: 37, name: 'UTC+01.00', code: '+13' } },
		{ label: 'UTC+14.00', value: { id: 38, name: 'UTC+01.00', code: '+14' } },
	];

	const dropdownOptions2 = [
		{ label: 'Where did you hear Ultima', value: null },
		{ label: 'Blogs', value: 'Blogs' },
		{ label: 'Google Ads', value: 'google' },
		{ label: 'Your Forum', value: 'prime-forum' },
		{ label: 'Youtube', value: 'Youtube' },
		{ label: 'Reddit', value: 'Reddit' },
		{ label: 'Events', value: 'Events' },
		{ label: 'Other', value: 'Other' }
	];

	return (
		<div className="wizard-body">
			<div className="wizard-wrapper">
				<div className="wizard-topbar">
					<div className="logo"></div>
					<div className="profile">
						<div className="profile-text">
							<h1>Welcome to Ultima</h1>
							<p>Please complete steps to register</p>
						</div>
						<img className="profile-image" src="assets/layout/images/extensions/flag-us@2x.png"
							alt="ultima-layout" />
					</div>
				</div>

				<div className="wizard-content">
					<div className="wizard-card">
						<div className="wizard-card-header">
							<div className="grid col-12">
								<div
									className={classNames("col-4 tab register-tab", { 'selected-tab': activeTab === 'register' })}
									onClick={() => setActiveTab('register')}>
									<div className="icon">
										<i className="pi pi-sign-in"></i>
									</div>
									<div className="title">REGISTER</div>
								</div>
								<div
									className={classNames("col-4 tab tier-tab", { 'selected-tab': activeTab === 'tier' })}
									onClick={() => setActiveTab('tier')}>
									<div className="icon">
										<i className="pi pi-clone"></i>
									</div>
									<div className="title">CHOOSE TIER</div>
								</div>
								<div
									className={classNames("col-4 tab payment-tab", { 'selected-tab': activeTab === 'payment' })}
									onClick={() => setActiveTab('payment')}>
									<div className="icon">
										<i className="pi pi-shopping-cart"></i>
									</div>
									<div className="title">PAYMENT</div>
								</div>
								<div className={classNames("tab-bar", {
									'tab-bar-register': activeTab === 'register',
									'tab-bar-tier': activeTab === 'tier',
									'tab-bar-payment': activeTab === 'payment'
								})} />
							</div>
						</div>

						<div
							className={classNames("wizard-card-content register", { 'active-content': activeTab === 'register' })}>
							<div className="grid">
								<div className="col-12 lg:col-6">
									<h1>ESSENTIAL INFORMATION</h1>
									<div className="forms">
										<div className="p-inputgroup">
											<span className="p-inputgroup-addon">
												<i className="pi pi-user"></i>
											</span>
											<InputText placeholder="Username" />
										</div>
										<div className="p-inputgroup">
											<span className="p-inputgroup-addon">
												<i className="pi pi-user"></i>
											</span>
											<InputText placeholder="Email" />
										</div>
										<div className="p-inputgroup">
											<span className="p-inputgroup-addon">
												<i className="pi pi-sign-in"></i>
											</span>
											<InputText placeholder="Password" />
										</div>
									</div>
								</div>
								<div className="col-12 lg:col-6">
									<h1>OPTIONAL</h1>
									<div className="forms">
										<Dropdown id="timezone" style={{ marginBottom: '10px' }}
											options={dropdownOptions} value={dropdownTime}
											onChange={event => setDropdownTime(event.value)} />

										<div className="calendar">
											<Calendar id="button" appendTo={document.body} placeholder="Birthdate"
												showIcon={true} value={date}
												onChange={(e) => setDate(e.value)} />
										</div>

										<Dropdown id="ultima" appendTo={document.body}
											options={dropdownOptions2} value={dropdownHear}
											onChange={event => setDropdownHear(event.value)} />
									</div>
								</div>
								<div className="col-12">
									<Button className="continue-button" label="CONTINUE"
										onClick={() => setActiveTab('tier')} />
								</div>
							</div>
						</div>

						<div
							className={classNames("wizard-card-content tier", { 'active-content': activeTab === 'tier' })}>
							<div className="grid">
								<div className="col-12 md:col-6 lg:col-4">
									<div className="card basic">
										<div className="card-header">
											<div className="grid">
												<div className="p-col-8">
													<h1>BASIC</h1>
												</div>
												<div className="col-4">
													<h1>$5</h1>
													<span>/m</span>
												</div>
											</div>
										</div>
										<div className="card-content">
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Responsive</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Push Messages</div>
											</div>
											<div className="col-12 tier-button-wrapper">
												<Button className="tier-button basic" label="BASIC"
													onClick={() => {
														setActiveCard('basic')
														setActiveTab('payment')
													}} />
											</div>
										</div>
									</div>
								</div>

								<div className="col-12 md:col-6 lg:col-4">
									<div className="card pro">
										<div className="card-header">
											<div className="grid">
												<div className="p-col-7">
													<h1>PRO</h1>
												</div>
												<div className="p-col-5">
													<h1>$25</h1>
													<span>/m</span>
												</div>
											</div>
										</div>
										<div className="card-content">
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Responsive</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Push Messages</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">7/24 Support</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Free Shipping</div>
											</div>
											<div className="col-12 tier-button-wrapper">
												<Button className="tier-button pro" label="SELECT PRO"
													onClick={() => {
														setActiveCard('pro');
														setActiveTab('payment')
													}} />
											</div>
										</div>
									</div>
								</div>

								<div className="col-12 md:col-6 lg:col-4">
									<div className="card pro-plus">
										<div className="card-header">
											<div className="grid">
												<div className="col-7">
													<h1>PRO+</h1>
												</div>
												<div className="col-5">
													<h1>$50</h1>
													<span>/m</span>
												</div>
											</div>
										</div>
										<div className="card-content">
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Responsive</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Push Messages</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">7/24 Support</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Free Shipping</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Unlimited BW</div>
											</div>
											<div className="card-row grid">
												<div className="col-3">
													<i className="pi pi-fw pi-check"></i>
												</div>
												<div className="col-9">Special Gift Cards</div>
											</div>
											<div className="col-12 tier-button-wrapper">
												<Button className="tier-button pro-plus" label="SELECT PRO+"
													onClick={() => {
														setActiveCard('pro-plus')
														setActiveTab('payment')
													}
													} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							className={classNames("wizard-card-content payment", { 'active-content': activeTab === 'payment' })}>
							<div className="grid grid-nogutter">
								<div className="lg:col-8 col-12 payment-info">
									<div className="grid p-col" id="customPanel">
										<div className="p-col-1 p-lg-1 p-md-1" style={{ lineHeight: '2em' }}>
											<RadioButton inputId="credit" name="group1" value="Credit"
												onChange={(e) => setGroup1(e.value)}
												checked={group1 === 'Credit'} />
										</div>
										<div className="col-11 lg:col-5 md:col-5">
											<div className="credits">
												<img src="assets/layout/images/extensions/asset-mastercard.svg"
													alt="ultima-layout" />
												<img src="assets/layout/images/extensions/asset-visa.svg"
													alt="ultima-layout" />
												<img src="assets/layout/images/extensions/asset-amex.svg"
													alt="ultima-layout" />
											</div>
										</div>
										<div className="p-col-1 p-lg-1 p-md-1" style={{ lineHeight: '2em' }}>
											<RadioButton inputId="paypal" name="group1" value="Paypal"
												onChange={(e) => setGroup1(e.value)}
												checked={group1 === 'Paypal'} />
										</div>
										<div className="col-11 lg:col-5 md:col-5">
											<div className="paypal">
												<img src="assets/layout/images/extensions/asset-paypal.svg"
													alt="ultima-layout" />
											</div>
										</div>
									</div>

									<div className="grid col-12">
										<div className="col-12">
											<span className="p-float-label">
												<InputText id="cardHolder" type="text" />
												<label htmlFor="cardHolder">Card Holder Name</label>
											</span>
										</div>
									</div>
									<div className="grid col-12">
										<div className="col-6">
											<span className="p-float-label">
												<InputText id="cardNo" type="text" />
												<label htmlFor="cardNo">Card No</label>
											</span>
										</div>
										<div className="col-3">
											<span className="p-float-label">
												<InputText id="cardDate" type="text" />
												<label htmlFor="cardDate">Date</label>
											</span>
										</div>
										<div className="col-3">
											<span className="p-float-label">
												<InputText id="cardCCV" type="text" />
												<label htmlFor="cardCCV">CCV</label>
											</span>
										</div>
									</div>
									<div className="grid p-col check-info" style={{ marginLeft: 0 }}>
										<Checkbox inputId="cb1" checked={checked} onChange={e => setChecked(e.checked)} />
										<label htmlFor="cb1" className="p-checkbox-label">Save credit card information for future usage</label>
									</div>
								</div>

								<div className="lg:col-4 col-12 order-info">
									<div className="grid col-12">
										<div className="col-12">
											<h1>ORDER SUMMARY</h1>
										</div>
									</div>

									<div className={classNames('order order-default', { 'selected-order': activeCard === '' })}>
										<div className="grid col-12">
											<div className="col-8">Tier - </div>
											<div className="col-4 price">$0.00</div>
											<div className="col-8">VAT (%18)</div>
											<div className="col-4 price">$0.00</div>
										</div>
										<div className="grid col-12 total">
											<div className="col-8">Total</div>
											<div className="col-4 price">$0.00</div>
											<div className="col-12">
												Please select one tier.
											</div>
										</div>
									</div>
									<div className={classNames('order order-basic', { 'selected-order': activeCard === 'basic' })}>
										<div className="grid col-12">
											<div className="col-8">Tier - Basic</div>
											<div className="col-4 price">$5.00</div>
											<div className="col-8">VAT (%18)</div>
											<div className="col-4 price">$0.90</div>
										</div>
										<div className="grid col-12 total">
											<div className="col-8">Total</div>
											<div className="col-4 price">$5.90</div>
											<div className="col-12">
												<Button type="button" label="CONFIRM ORDER" className="buy-button" />
											</div>
										</div>
									</div>
									<div className={classNames('order order-pro', { 'selected-order': activeCard === 'pro' })}>
										<div className="grid col-12">
											<div className="col-8">Tier - Pro</div>
											<div className="col-4 price">$25.00</div>
											<div className="col-8">VAT (%18)</div>
											<div className="col-4 price">$4.50</div>
										</div>
										<div className="grid col-12 total">
											<div className="col-8">Total</div>
											<div className="col-4 price">$29.50</div>
											<div className="col-12">
												<Button type="button" label="CONFIRM ORDER" className="buy-button" />
											</div>
										</div>
									</div>
									<div className={classNames('order order-pro-plus', { 'selected-order': activeCard === 'pro-plus' })}>
										<div className="grid col-12">
											<div className="col-8">Tier - Pro+</div>
											<div className="col-4 price">$50.00</div>
											<div className="col-8">VAT (%18)</div>
											<div className="col-4 price">$9.00</div>
										</div>
										<div className="grid col-12 total">
											<div className="col-8">Total</div>
											<div className="col-4 price">$59.00</div>
											<div className="col-12">
												<Button type="button" label="CONFIRM ORDER" className="buy-button" />
											</div>
										</div>
									</div>
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

export default React.memo(Wizard, comparisonFn);
