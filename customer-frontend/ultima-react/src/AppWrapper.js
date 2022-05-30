import React, { useEffect } from 'react';
import { Route, withRouter, useLocation } from 'react-router-dom';
import App from "./App";
import Login from "./pages/Login";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Access from "./pages/Access";
import Landing from './pages/Landing';

const AppWrapper = (props) => {
	let location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location]);

	switch (props.location.pathname) {
		case "/login":
			return <Route path="/login" component={Login} />
		case "/error":
			return <Route path="/error" component={Error} />
		case "/notfound":
			return <Route path="/notfound" component={NotFound} />
		case "/access":
			return <Route path="/access" component={Access} />
		case "/landing":
			return <Route path="/landing" component={Landing} />
		default:
			return <App />;
	}

}

export default withRouter(AppWrapper);
