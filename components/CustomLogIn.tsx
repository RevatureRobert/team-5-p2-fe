import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { UserAction } from '../custom_types/action_types';
import { Auth } from 'aws-amplify'

export default function CustomLogIn(){
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLoginPress = () =>{
    
    signIn();
  
    setUsername('');
    setPassword('');
  }

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      loginDispatcher();
      console.log('User Logged In Successfully')
    } catch (error) {
      
        console.log('error signing in', error);
        return;
    }
}

const loginDispatcher = () => {
  dispatch({
    type: UserAction.LOGIN_USER,
    payload: {
      user: {
        id: null,
        username,
        password,
        email: null,
      }
    }
  })
}

  return (
    <View>
        <TextInput
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
        />

        <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
        />

        <Button mode="contained" onPress={onLoginPress}>Log In</Button>
        <Button mode="contained" style={{top: 10}}>Sign Up</Button>

    </View>
    
  );
}