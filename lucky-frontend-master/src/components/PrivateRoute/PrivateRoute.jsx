import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
    const {user} = useSelector(state => state.user);

    if (user === null) {
        return (
            <div>Cargando...</div>
        );
    };

    if (user === false) {
        return (
            <Redirect to="/login" />
        );
    };

    if (user) {

        return (
            <Route {...props} />
        );
    };
};

export default PrivateRoute;