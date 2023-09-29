import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import RegistrationComponent from './Components/pages/Registration';
import CollectionComponent from './Components/pages/Collection';
import RemmitanceComponent from './Components/pages/Remittance';

const MyRoutes = () => {
    return ( 
        <Router>
            <Routes>
                <Route exact path="/" Component={App}/>
                <Route path="/register" Component={RegistrationComponent} />
                <Route path="/collection" Component={CollectionComponent} />
                <Route path="/remmitance" Component={RemmitanceComponent} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;