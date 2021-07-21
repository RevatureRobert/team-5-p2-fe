import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from './Screens/Home'
import Profile from './Screens/Profile'
import CustomNav from './components/CustomNav';
import AddThread from './components/AddThread';
import CustomLogInModal from './components/CustomLogInModal'

const Stack = createStackNavigator();

export default function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
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


  //Add Post
  const addPost = (thread) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = {id, ...thread}
    setThreads([...threads, newPost])
    console.log(threads);
  }

  return (
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
            {(props) => <Home {...props} threads={threads} />}
          </Stack.Screen>
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <Portal>
          <CustomLogInModal visible={visible} setVisible={setVisible} />
          <AddThread
            visible={addThreadVisible}
            setVisible={setAddThreadVisible}
            onAdd={addPost}
          />
        </Portal>
      </NavigationContainer>
    </PaperProvider>
  );
}