import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from './Screens/Home'
import Profile from './Screens/Profile'
import CustomNav from './components/CustomNav';
import AddThread from './components/AddThread';
import CustomLogInModal from './components/CustomLogInModal'
import { combineReducers, createStore, Store } from 'redux';
import {IAppState} from './redux/Store';
import { IAppThreadActions, IAppUserActions } from './redux/Actions';
import {reducersThread, reducersUser} from './redux/Reducers'
import { Provider, useSelector } from 'react-redux';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import { iUser } from './components/models';

import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);


const Stack = createStackNavigator();
const rootReducer = combineReducers({thread: reducersThread, user: reducersUser})
const store: Store<IAppState, IAppUserActions | IAppThreadActions> = createStore(rootReducer)





export default function App() {

  const [addThreadVisible, setAddThreadVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

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
                  setVisible={setVisible}
                  setAddThreadVisible={setAddThreadVisible}
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
          </Stack.Navigator>
          <Portal>
            <CustomLogInModal visible={visible} setVisible={setVisible} />
            <AddThread
              visible={addThreadVisible}
              setVisible={setAddThreadVisible}
            />
          </Portal>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}



