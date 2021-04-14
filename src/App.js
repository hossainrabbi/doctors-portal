import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppointmentDetails from './pages/AppointmentDetails';
import SignIn from './pages/SignIn';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/appointment"
                    component={AppointmentDetails}
                />
                <Route exact path="/login" component={SignIn} />
            </Switch>
        </Router>
    );
}

export default App;
