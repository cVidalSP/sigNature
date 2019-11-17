import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Login from './pages/Login';
import Options from "./pages/Options";

const Routes = createAppContainer(
    createSwitchNavigator({
        Options,
        Home,
        Login
    })
);

export default Routes;