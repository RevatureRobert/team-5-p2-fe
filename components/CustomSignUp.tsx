import * as React from 'react';
import { View,Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';

export default function signUp(props){

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

        <TextInput
            label="Retype Password"
            value={props.password}
            onChangeText={text => props.setPassword(text)}
        />  

        <TextInput
            label="Email"
            value={props.email}
            onChangeText={text => props.setEmail(text)}
        />

        <Button mode="contained" onPress={() => console.log('Pressed')}>Sign Up</Button>

        <Button mode="contained" onPress={props.onSignUp} style={{top: 10}}>Back to Log In</Button>

    </View>
    
  );
}