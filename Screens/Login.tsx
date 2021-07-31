import * as React from 'react';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../custom_types/action_types';
import { Auth } from 'aws-amplify'
import { View } from 'react-native';

export default function Login({navigation}) {
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
        const user = await Auth.currentAuthenticatedUser();
        loginDispatcher(user);
        navigation.navigate('Home');
        console.log('User Logged In Successfully')
    } catch (error) {
        console.log('error signing in', error);
        return;
    }
}

const loginDispatcher = (user) => {
  
  dispatch({
    type: UserAction.LOGIN_USER,
    payload: {
      user: {
        id: null,
        username,
        password,
        email: user.attributes.email,
        profile: user.attributes.profile
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
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
        />

        <Checkbox.Item label="Remember Me?" status="checked" />

        <Button mode="contained" onPress={onLoginPress}>Log In</Button>
        <Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={{top: 10}}>Sign Up</Button>

    </View>
    
  );
}