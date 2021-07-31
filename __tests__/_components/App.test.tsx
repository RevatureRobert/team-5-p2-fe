import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home  from '../../Screens/Home'
import Profile from '../../Screens/Profile'
import Login from '../../Screens/Login'
import CustomNav from '../../components/CustomNav';
import ThreadAdd from '../../Screens/ThreadAdd';
//Redux Imports
import { combineReducers, createStore, Store, applyMiddleware } from 'redux';
import {IAppState} from '../../redux/Store';
import { IThreadActions, IUserActions } from '../../custom_types/action_types';
import {reducersThread, reducersUser} from '../../redux/Reducers'
import thunk from 'redux-thunk';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../../Screens/SignUp';
import EditProfile from '../../Screens/EditProfile';

const rootReducer = combineReducers({threadState: reducersThread, userState: reducersUser});
const store: Store<IAppState, IUserActions | IThreadActions> = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

Enzyme.configure({ adapter: new Adapter() });

/*
**  Screen Render Testing
**
*/
describe('Home', () => {
    it('renders without crashing', () => {
        const component = shallow(<Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props: any) => (
                <CustomNav
                  {...props}
                />
              ), //Use Custom Navigator Bar
            }}
          >
          <Stack.Screen name="Home">
            {(props) => <Home {...props}/>}
          </Stack.Screen>
          </Stack.Navigator>);
        expect(component).toMatchSnapshot();
    });
})


describe('Profile', () => {
    it('renders without crashing', () => {
        const component = shallow(<Stack.Navigator
            initialRouteName="Profile"
          >
          <Stack.Screen name="Profile">
            {(props) => <Profile {...props}/>}
          </Stack.Screen>
          </Stack.Navigator>);
        expect(component).toMatchSnapshot();
    });
})

describe('Login', () => {
    it('renders without crashing', () => {
        const component = shallow(<Stack.Navigator
            initialRouteName="Login"
          >
          <Stack.Screen name="Login">
            {(props) => <Login {...props}/>}
          </Stack.Screen>
          </Stack.Navigator>);
        expect(component).toMatchSnapshot();
    });
})



describe('Signup', () => {
    it('renders without crashing', () => {
        const component = shallow(<Stack.Navigator
            initialRouteName="SignUp"
          >
          <Stack.Screen name="SignUp">
            {(props) => <SignUp {...props}/>}
          </Stack.Screen>
          </Stack.Navigator>);
        expect(component).toMatchSnapshot();
    });
})

describe('ThreadAdd', () => {
    it('renders without crashing', () => {
        const component = shallow(<Stack.Navigator
            initialRouteName="ThreadAdd"
          >
          <Stack.Screen name="ThreadAdd">
            {(props) => <ThreadAdd {...props}/>}
          </Stack.Screen>
          </Stack.Navigator>);
        expect(component).toMatchSnapshot();
    });
})

describe('Edit Profile', () => {
    it('renders without crashing', () => {
        const component = shallow(<Stack.Navigator
            initialRouteName="EditProfile"
          >
          <Stack.Screen name="EditProfile">
            {(props) => <EditProfile {...props}/>}
          </Stack.Screen>
          </Stack.Navigator>);
        expect(component).toMatchSnapshot();
    });
})
