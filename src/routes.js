import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Login from './pages/Login';
import Options from "./pages/Options";
import Register from "./pages/Register";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Options,
        Home
    })
);

export default Routes;