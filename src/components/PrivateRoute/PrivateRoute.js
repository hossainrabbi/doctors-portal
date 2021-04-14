import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggendUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggendUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;
