import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home  from '../../Screens/Home'
import Profile from '../../Screens/Profile'
import Login from '../../Screens/Login'
import CustomNav from '../../components/CustomNav';
import ThreadAdd from '../../Screens/ThreadAdd';
//Redux Imports
import { IThreadActions, IUserActions } from '../../custom_types/action_types';
import {reducersThread, reducersUser} from '../../redux/Reducers'
import thunk from 'redux-thunk';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../../Screens/SignUp';
import EditProfile from '../../Screens/EditProfile';
import configureStore from 'redux-mock-store';
import { nestedHell } from './testFunctions';
import { User } from '../../src/models';


/*
**  Screen Render Testing
**
*/
describe('Home', () => {
    it('renders without crashing', () => {
      const callBack = (props) => <Home {...props}/>
        const component = mount(nestedHell({userState:{loggedIn:true}, threadState:{threads:[]}}, callBack));
          expect(component).toBeDefined();
    });
})


describe('Profile', () => {
    it('renders without crashing', () => {
      const callBack = (props) => <Profile {...props}/>
        const component = mount(nestedHell({userState:{loggedIn:true, currentUser:{
          id: 1,
          username: "Test User",
          password: "Test Password",
          email: "test@email.com",
          profile: "description of user",
        }}, threadState:{threads:[]}}, callBack))
          expect(component).toBeDefined();
    });
})

describe('Login', () => {
     it('renders without crashing', () => {
      const callBack = (props) => <Login {...props}/>
      const component = mount(nestedHell({userState:{loggedIn:true}, threadState:{threads:[]}}, callBack));
      expect(component).toBeDefined();
  });
})



describe('Signup', () => {
  it('renders without crashing', () => {
    const callBack = (props) => <SignUp {...props}/>
    const component = mount(nestedHell({userState:{loggedIn:true}, threadState:{threads:[]}}, callBack));
    expect(component).toBeDefined();
});
})


describe('ThreadAdd', () => {
  it('renders without crashing', () => {
    const callBack = (props) => <ThreadAdd {...props}/>
    const component = mount(nestedHell({userState:{loggedIn:true, currentUser:{
      id: 1,
      username: "Test User",
      password: "Test Password",
      email: "test@email.com",
      profile: "description of user",
    }}, threadState:{threads:[]}}, callBack));
    expect(component).toBeDefined();
});
})


describe('Edit Profile', () => {
  it('renders without crashing', () => {
    const callBack = (props) => <EditProfile {...props}/>
    const component = mount(nestedHell({userState:{loggedIn:true, currentUser:{
      id: 1,
      username: "Test User",
      password: "Test Password",
      email: "test@email.com",
      profile: "description of user",
    }}, threadState:{threads:[]}}, callBack));
    expect(component).toBeDefined();
});
})
