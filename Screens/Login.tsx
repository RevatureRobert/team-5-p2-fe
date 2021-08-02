import * as React from 'react';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { UserAction } from '../custom_types/action_types';
import { Auth } from 'aws-amplify'
import { View, ImageBackground, StyleSheet} from 'react-native';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLoginPress = () =>{
    signIn();
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
    <View style={card.view}>
      <ImageBackground source={require('../components/Forest_Background.jpg')}  style={{flex: 1}}>
        <TextInput style={{backgroundColor: 'rgba(14, 80, 9, .85)'}}
                label="Username"
                value={username}
                onChangeText={text => setUsername(text)}
            />

            <TextInput style={{backgroundColor: 'rgba(14, 80, 9, .85)'}}
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />

            <Checkbox.Item label="Remember Me?" status="checked" />

            <Button mode="contained" onPress={onLoginPress}>Log In</Button>
            <Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={{top: 10}}>Sign Up</Button>
      </ImageBackground>
    </View>
    
  );
}


const card = StyleSheet.create({
  view: {
      backgroundColor: 'rgba(14, 80, 9, .85)',
      flex: 1,
  },
})