import React from "react";
import {ConfigTabNavigator, createBottomNavigation} from "../components/BottomNavigation";
import {Icon} from 'react-native-elements'
import Dashboard from "./Dashboard";

export default function Options({ navigation }) {
    const routes = {
        Home: {
            screen: Dashboard,
            params: {
                nav: navigation,
            },
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" type='feather' size={18} color={tintColor}/>
                ),
            }
        },
        Favoritos: {
            screen: Dashboard,
            params:{
                nav: navigation
            },
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="heart" type='feather' size={18} color={tintColor}/>
                ),
            }
        },
        Vistos: {
            screen: Dashboard,
            params:{
                nav: navigation
            },
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="archive" type='feather' size={18} color={tintColor}/>
                ),
            }
        }
    };
    const Tabs = createBottomNavigation(ConfigTabNavigator(routes));

    return (
        <Tabs/>
    )
}