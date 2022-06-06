import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

	const history = useHistory();

	const goDashboard = () => {
		history.push('/');
	}

	return (
		<div className="pages-body notfound-page flex flex-column">
			<div className="topbar p-3 flex justify-content-between flex-row align-items-center">
				<div className="topbar-left ml-3 flex" >
					<div className="logo">
						<img src="assets/layout/images/logo2x.png" alt="" />
					</div>
				</div>
				<div className="topbar-right mr-3 flex">
					<Button type="button" onClick={goDashboard} label="DASHBOARD"
						className="p-button-text p-button-plain topbar-button"></Button>
				</div>
			</div>

			<div className="align-self-center mt-auto mb-auto">
				<div className="pages-panel card flex flex-column">
					<div className="pages-header px-3 py-1">
						<h2>NOT FOUND</h2>
					</div>
					<div className="card mt-3 px-6">
						<img src="assets/layout/images/pages/404.png" alt="" />
					</div>
					<div className="pages-detail pb-6">Requested resource is not available.</div>
					<Button type="button" onClick={goDashboard} label="GO BACK TO DASHBOARD" className="p-button-text"></Button>
				</div>
			</div>
		</div>
	)
}

export default NotFound;
