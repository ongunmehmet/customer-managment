import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

const Login = () => {

	const history = useHistory();

	const goDashboard = () => {
		history.push('/');
	}

	return (
		<div className="pages-body login-page flex flex-column">
			<div className="topbar p-3 flex justfiy-content-between flex-row align-items-center">
				<div className="topbar-left ml-3 flex">
					<div className="logo">
						<img src="assets/layout/images/logo2x.png" alt="" />
					</div>
				</div>
				<div className="topbar-right mr-3 flex">
					<Button onClick={goDashboard} type="button" label="DASHBOARD"
						className="p-button-text p-button-plain topbar-button"></Button>
				</div>
			</div>

			<div className="align-self-center mt-auto mb-auto">
				<div className="pages-panel card flex flex-column">
					<div className="pages-header px-3 py-1">
						<h2>LOGIN</h2>
					</div>

					<h4>Welcome</h4>

					<div className="pages-detail mb-6 px-6">Please use the form to sign-in Ultima network</div>

					<div className="input-panel flex flex-column px-3">
						<div className="p-inputgroup">
							<span className="p-inputgroup-addon">
								<i className="pi pi-envelope"></i>
							</span>
							<span className="p-float-label">
								<InputText type="text" id="inputgroup1" />
								<label htmlFor="inputgroup1">Email</label>
							</span>
						</div>

						<div className="p-inputgroup mt-3 mb-6">
							<span className="p-inputgroup-addon">
								<i className="pi pi-lock"></i>
							</span>
							<span className="p-float-label">
								<InputText type="password" id="inputgroup2" />
								<label htmlFor="inputgroup2">Password</label>
							</span>
						</div>

					</div>

					<Button className="login-button mb-6 px-3" label="LOGIN"></Button>

				</div>
			</div>
		</div>
	)
}

export default Login;
