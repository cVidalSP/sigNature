import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Login from './pages/Login';
import Options from "./pages/Options";//Importa as paginas do app
import PetitionDetail from './pages/PetitionDetail';
import Dashboard from './pages/Dashboard';

const Routes = createAppContainer(
    createSwitchNavigator({
        Options,
        Dashboard,
        PetitionDetail,
        Home,
        Login, 
    })
);

export default Routes;