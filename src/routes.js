import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Login from './pages/Login';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Login
    })
);

export default Routes;