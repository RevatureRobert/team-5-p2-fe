import * as React from 'react';
import { View,Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';

export default function logIn(props){

  const [showSignUp, setShowSignUp] = React.useState(false);

  const setLoginPressed = () =>{
    props.setLoggedIn(!props.loggedIn)
    props.hideModal();
  }

  return (
    <View>

        <TextInput
            label="Username"
            value={props.username}
            onChangeText={text => props.setUsername(text)}
        />

        <TextInput
            label="Password"
            value={props.password}
            onChangeText={text => props.setPassword(text)}
        />

        <Checkbox.Item label="Remember Me?" status="checked" />

        <Button mode="contained" onPress={setLoginPressed}>Log In</Button>

        <Button mode="contained" onPress={props.onSignUp} style={{top: 10}}>Sign Up</Button>

    </View>
    
  );
}