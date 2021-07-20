import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from './Screens/Home'
import Profile from './Screens/Profile'
import CustomNav from './components/CustomNav';
import CustomLogInModal from './components/CustomLogInModal'

const Stack = createStackNavigator();



export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [visible, setVisible] = React.useState(false);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props: any) => <CustomNav {...props} loggedIn={loggedIn} setVisible={setVisible}/>, //Use Custom Navigator Bar
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <CustomLogInModal visible={visible} setVisible={setVisible}/>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}