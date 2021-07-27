import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { UserAction } from '../redux/Actions';
import { Auth } from 'aws-amplify'

export default function logIn(props){
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLoginPress = () =>{
    
    signIn();
  
    setUsername('');
    setPassword('');
    props.hideModal();
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

        <Checkbox.Item label="Remember Me?" status="checked" />

        <Button mode="contained" onPress={onLoginPress}>Log In</Button>
        <Button mode="contained" onPress={props.onSignUp} style={{top: 10}}>Sign Up</Button>

    </View>
    
  );
}