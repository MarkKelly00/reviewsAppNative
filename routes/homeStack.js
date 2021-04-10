import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            // headerStyle: { backgroundColor: '#ddd'}
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#ddd'}
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ddd', height: 60 }
    }
});

export default createAppContainer(HomeStack);