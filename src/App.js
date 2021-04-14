import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppointmentDetails from './pages/AppointmentDetails';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/Login';

export const UserContext = createContext();

function App() {
    const [loggendUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggendUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute exact path="/appointment">
                        <AppointmentDetails />
                    </PrivateRoute>
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
