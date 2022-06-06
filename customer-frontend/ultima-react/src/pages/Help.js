import React from 'react';
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputText } from 'primereact/inputtext';

const Help = () => {

	const basicHeader = <div className="flex align-items-center">
		<i className="pi pi-bookmark fs-xlarge p-mr-3 pink-color"></i>
		<div className="flex flex-column">
			<h5 className="p-mb-0">The Basics</h5>
			<p>4 articles in this collection</p>
		</div>
	</div>

	const licencesHeader = <div className="flex align-items-center">
		<i className="pi pi-bookmark fs-xlarge p-mr-3 pink-color"></i>
		<div className="flex flex-column">
			<h5 className="p-mb-0">Questions About Licenses</h5>
			<p>3 articles in this collection</p>
		</div>
	</div>

	const frameworksHeader = <div className="flex align-items-center">
		<i className="pi pi-bookmark fs-xlarge p-mr-3 pink-color"></i>
		<div className="flex flex-column">
			<h5 className="p-mb-0">Questions About Frameworks</h5>
			<p>6 articles in this collection</p>
		</div>
	</div>

	return (
		<div className="grid layout-help-page">
			<div className="p-col-12">
				<div className="card p-p-0">
					<div className="grid grid-nogutter">
						<div className="col-12 layout-help-page-header">
							<img src="assets/layout/images/extensions/help-header@2x.jpg" alt="help-header" style={{ width: '100%' }} />
							<h1 className="layout-help-page-header-text">Frequently Asked Questions</h1>
							<div className="layout-help-page-search p-input-icon-left p-fluid p-shadow-2">
								<i className="pi pi-search"></i>
								<InputText type="text" placeholder="Search" />
							</div>
						</div>
						<div className="col-12 p-5">

							<Accordion>
								<AccordionTab header={basicHeader}>
									<Accordion className="questions">
										<AccordionTab header="Which do I need to develop a SaaS application?">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque ligula dolor, pretium tincidunt libero sodales in. Integer at eros posuere, elementum felis a, laoreet libero. In sed nunc accumsan, dapibus nibh sit amet, aliquet ipsum.
                                		</AccordionTab>
										<AccordionTab header="I’m a freelancer/agency. Can I use the item for an end product I’m doing for a client?">
											Aliquam erat volutpat. Nulla hendrerit, arcu non lobortis fringilla, ipsum orci condimentum risus, ac hendrerit mauris justo eget lectus.
                                		</AccordionTab>
										<AccordionTab header="We’re a reseller, are we able to purchase a license on behalf of our client? ">
											Ut leo tellus, imperdiet tristique turpis eu, eleifend rhoncus dolor. Fusce eu feugiat urna. Nullam venenatis nisi varius justo ultrices, non aliquam nisi dapibus. Duis viverra nulla ipsum, ac laoreet mauris dapibus eu.
                                		</AccordionTab>
										<AccordionTab header="Is there a recurring fee or is it perpetual? ">
											Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eu consequat libero. Donec euismod facilisis pulvinar.
                                		</AccordionTab>
									</Accordion>
								</AccordionTab>
							</Accordion>

							<Accordion className="mt-3">
								<AccordionTab header={licencesHeader}>
									<Accordion className="questions">
										<AccordionTab header="Pellentesque faucibus convallis dolor ?">
											Donec facilisis, magna aliquam venenatis lobortis, nulla diam euismod orci, ac pharetra risus mi eget mauris. Praesent eleifend.
                                		</AccordionTab>
										<AccordionTab header="Sed rhoncus, lacus a volutpat elementum ?">
											Cras vel ullamcorper metus, vel faucibus ex. Nullam finibus ligula quis dolor aliquet, quis tempor lectus posuere. In sed mattis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                		</AccordionTab>
										<AccordionTab header="Fusce porttitor augue turpis, vitae malesuada elit condimentum ?">
											Proin dapibus ipsum eget libero elementum, a consectetur tortor tristique. Suspendisse potenti. Aenean dictum blandit mauris, a sollicitudin ex sagittis sit amet.
                                		</AccordionTab>
									</Accordion>
								</AccordionTab>
							</Accordion>

							<Accordion className="mt-3">
								<AccordionTab header={frameworksHeader}>
									<Accordion className="questions">
										<AccordionTab header="Lorem ipsum dolor sit amet, consectetur adipiscing elit ?">
											Vivamus in tortor arcu. Morbi ornare ex mi, sit amet pretium nibh sollicitudin eu.
                                		</AccordionTab>
										<AccordionTab header="Sed ut massa accumsan, consequat ligula sit amet, dignissim diam ?">
											Curabitur elit enim, scelerisque at eros ac, sagittis volutpat ante. Mauris ac accumsan lorem, in viverra turpis.
                                		</AccordionTab>
										<AccordionTab header=" Vivamus lobortis lacinia eros vel viverra. Vestibulum molestie tortor metus, ac dapibus massa sodales eget ?">
											Donec ut justo sit amet erat eleifend vulputate ut at mi.
                                		</AccordionTab>
										<AccordionTab header="Donec finibus tristique leo, consectetur tincidunt velit ?">
											Maecenas mattis malesuada lobortis. Praesent hendrerit eros quam. Praesent volutpat mauris ut dignissim maximus.
                               			</AccordionTab>
										<AccordionTab header="Praesent suscipit, magna at lacinia tempor ?">
											Velit leo commodo magna, at pharetra risus libero vitae urna.
                                		</AccordionTab>
										<AccordionTab header="Nulla auctor urna eget purus placerat maximus. Interdum ?">
											Et malesuada fames ac ante ipsum primis in faucibus.
                                		</AccordionTab>
									</Accordion>
								</AccordionTab>
							</Accordion>

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

export default React.memo(Help, comparisonFn);
