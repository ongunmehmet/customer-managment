import './App.css';

import Customers from "./Customers";
import CreateCustomer from "./CreateCustomer";
import {BrowserRouter, Link, Route, Routes, Switch} from "react-router-dom";
import EditCustomer from "./EditCustomer";
import customers from "./Customers";

function App(props) {
    return (
        <BrowserRouter>

            <div>   </div>

               {/*<Link to="/editCustomer"></Link>*/}
                <Routes>


                    <Route exact path="/customers" element={<Customers/>}/>
                    <Route exact path="/update" element={<EditCustomer />}/>
                    <Route exact path="/editOneCustomer" element={<EditCustomer />}/>
                        <Route exact path="/" element={<Customers/>}/>
                        <Route exact path="/createOneCustomer" element={<CreateCustomer/>}/>


                </Routes>



</BrowserRouter>


   );
}

export default App;
