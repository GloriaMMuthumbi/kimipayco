import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import RegistrationComponent from './Components/pages/Registration';

const MyRoutes = () => {
    return ( 
        <Router>
            <Routes>
                <Route exact path="/" Component={App}/>
                <Route path="/register" Component={RegistrationComponent} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;