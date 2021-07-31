import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { UserAction } from '../custom_types/action_types';
import { Auth } from 'aws-amplify'
import { View } from 'react-native';

export default function CustomSignUp(props){
    const dispatch = useDispatch();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [authName, setAuthName] = React.useState('');
    const [authCode, setAuthCode] = React.useState('');

    const onSignUpSubmit = () => {
        signUp();
        setUsername('');
        setPassword('');
        setEmail('');
    }

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    email: email,          // optional
                    'profile': ''// optional - E.164 number convention
                    // other custom attributes 
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
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
    
    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp( authName, authCode )
            console.log('User signup successfully')
            addNewUser();
            setAuthName('');
            setAuthCode('');
        } catch (error) {
            console.log('Error Signing up')
        }
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

        <TextInput
            style={{top: 10}}
            label="Confirm Username"
            value={authName}
            onChangeText={text => setAuthName(text)}
        />

        <TextInput
            style={{top: 10}}
            label="Authentication"
            value={authCode}
            onChangeText={text => setAuthCode(text)}
        />

        <Button mode="contained" onPress={confirmSignUp} style={{top: 10}}>Authenticate</Button>


    </View>
    
  );
}