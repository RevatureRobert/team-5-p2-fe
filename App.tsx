import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from './Screens/Home'
import Profile from './Screens/Profile'
import CustomNav from './components/CustomNav';
import AddThread from './components/AddThread';
import LogInModal from './components/CustomLogInModal'
import { combineReducers, createStore, Store } from 'redux';
import {IAppState} from './redux/Store';
import { IAppActions, IAppThreadActions, IAppUserActions } from './redux/Actions';
import {reducersThread, reducersUser} from './redux/Reducers'
import { Provider, useSelector } from 'react-redux';


const Stack = createStackNavigator();

const rootReducer = combineReducers({thread: reducersThread, user: reducersUser})
const store: Store<IAppState, IAppUserActions | IAppThreadActions> = createStore(rootReducer)

export default function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [addThreadVisible, setAddThreadVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  
  const [threads, setThreads] = React.useState([
    {
      title: "Testing Boi 1",
      author: "Jacob",
      description: "IDK if this will work or not?",
      post: "This is a test to see if this will work",
      id: 0,
    },
    {
      title: "Hey",
      author: "Tyler",
      description: "This is also a test",
      post: "Trying to get this all to work",
      id: 1,
    }]);

  const [users, setUsers] = React.useState([
    {
      id: 1,
      username: "Potato",
      password: "PotatsRCul",
      email: "ILikePotatoes@gmail.com"
    }
  ])


  //Add Post
  const addPost = (thread) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = {id, ...thread}
    setThreads([...threads, newPost])
    console.log(threads);
  }

  const addUser = (user) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = {id, ...user};
    setUsers([...users, newUser]);
    console.log(users)
  }

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
                  loggedIn={loggedIn}
                  setVisible={setVisible}
                  setAddThreadVisible={setAddThreadVisible}
                />
              ), //Use Custom Navigator Bar
            }}
          >
            <Stack.Screen name="Home">
              {(props) => <Home {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
          <Portal>
            <LogInModal visible={visible} setVisible={setVisible} onAdd={addUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            <AddThread
              visible={addThreadVisible}
              setVisible={setAddThreadVisible}
              onAdd={addPost}
            />
          </Portal>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}