import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Login from './pages/Login';
import Options from "./pages/Options";
import Verify from './pages/Verify';
import Register from "./pages/Register";
import PetitionDetail from './pages/PetitionDetail';
import Dashboard from './pages/Dashboard';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Options,
        Dashboard,
        PetitionDetail,
        Verify,
        Home,
    })
);

export default Routes;