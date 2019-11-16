import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Login,
        Dashboard
    })
);

export default Routes;