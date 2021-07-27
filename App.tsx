import React from 'react';
//Navigation Imports
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Component Imports
import Home  from './Screens/Home'
import Profile from './Screens/Profile'
import CustomNav from './components/CustomNav';
import AddThread from './components/AddThread';
import CustomLogInModal from './components/CustomLogInModal'
//Redux Imports
import { combineReducers, createStore, Store, applyMiddleware } from 'redux';
import {IAppState} from './redux/Store';
import { IThreadActions, IUserActions } from './custom_types/action_types';
import {reducersThread, reducersUser} from './redux/Reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const Stack = createStackNavigator();

const rootReducer = combineReducers({threadState: reducersThread, userState: reducersUser});
const store: Store<IAppState, IUserActions | IThreadActions> = createStore(rootReducer, applyMiddleware(thunk));

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