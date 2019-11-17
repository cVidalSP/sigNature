import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export function ConfigTabNavigator(routes) {
    return createBottomTabNavigator(
        {
            ...routes
        },
        {
            initialRouteName: 'Home',
            tabBarOptions: {
                activeTintColor: '#01755D',
                style: {
                    backgroundColor: '#fff',
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20
                },
            }
        }
    );
}

export function createBottomNavigation(config) {
    return createAppContainer(config);
}