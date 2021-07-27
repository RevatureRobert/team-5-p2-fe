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
import { combineReducers, createStore, Store, applyMiddleware } from 'redux';
import {IAppState} from './redux/Store';
import { IAppThreadActions, IAppUserActions } from './redux/Actions';
import {reducersThread, reducersUser} from './redux/Reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const Stack = createStackNavigator();

const rootReducer = combineReducers({threadState: reducersThread, userState: reducersUser});
const store: Store<IAppState, IAppUserActions | IAppThreadActions> = createStore(rootReducer, applyMiddleware(thunk));

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