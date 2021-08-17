import React from 'react';
//Navigation Imports
//Component Imports
import Home  from './Screens/Home'
import Profile from './Screens/Profile'
import Login from './Screens/Login'
import CustomNav from './components/CustomNav';
import ThreadAdd from './Screens/ThreadAdd';
//Redux Imports
import { combineReducers, createStore, Store, applyMiddleware } from 'redux';
import {IAppState} from './redux/Store';
import { IThreadActions, IUserActions } from './custom_types/action_types';
import {reducersThread, reducersUser} from './redux/Reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//fuck Jared

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import SignUp from './Screens/SignUp';
import EditProfile from './Screens/EditProfile';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, View } from 'react-native';

Amplify.configure(config);

const Stack = createStackNavigator();
const rootReducer = combineReducers({threadState: reducersThread, userState: reducersUser});
const store:Store<IAppState, IUserActions | IThreadActions> = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#012701',
      accent: '#f1c40f',
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
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
              <Stack.Screen name="Profile">
              {(props) => <Profile {...props}/>}
              </Stack.Screen>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ThreadAdd" component={ThreadAdd}/>
              <Stack.Screen name="EditProfile" component={EditProfile}/>
            </Stack.Navigator>
          </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}


const card = StyleSheet.create({
  title: {
      // width: '50%',
      margin: 'auto',
      padding: '1em',
      marginBottom: '10px',
      // backgroundColor: '#279',
  },
  view: {
      backgroundColor: 'rgba(14, 80, 9, .85)',
      zIndex: 1,
  },
  sub: {
      // fontSize: 30,
      // color: '#000'
  },
  thread: {
      //width: '1000%',
      width:'80%',
      margin: 'auto',
      padding: '3.5%',
      marginBottom: '5%',
      backgroundColor: 'rgba(40, 199, 9, 0.5)',
      alignContent: 'center'
  },
  text: {
      // fontSize: 30,
      // color: '#000'
  },
  container: {

      // position: 'relative',
      // resizeMode: 'cover'
    },
  image: {
    flex: 1,
    justifyContent: 'center',
    zIndex: -1
  },
})
