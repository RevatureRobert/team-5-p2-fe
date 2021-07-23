import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { UserAction } from '../redux/Actions';

export default function signUp(props){
    const dispatch = useDispatch();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const onSignUpSubmit = () => {
        addNewUser();
        props.hideModal();
    }

    const addNewUser = () => {
        dispatch({
            type: UserAction.ADD_USER,
            payload: {
                user: {
                    id: Math.floor(Math.random() * 10000) + 1,
                    username,
                    password,
                    email,
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
        <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <Button mode="contained" onPress={onSignUpSubmit}>Sign Up</Button>
        <Button mode="contained" onPress={props.onSignUp} style={{top: 10}}>Back to Log In</Button>
    </View>
    
  );
}