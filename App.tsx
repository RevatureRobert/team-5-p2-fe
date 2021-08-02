import React from 'react';
//Navigation Imports
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

import Amplify, { API } from 'aws-amplify';
import config from './src/aws-exports';
import SignUp from './Screens/SignUp';
import EditProfile from './Screens/EditProfile';

Amplify.configure(config);

const Stack = createStackNavigator();
const rootReducer = combineReducers({threadState: reducersThread, userState: reducersUser});
const store: Store<IAppState, IUserActions | IThreadActions> = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {

  return (
    <Provider store={store} >
      <PaperProvider>
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



