import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Auth } from 'aws-amplify'
import { ImageBackground, View, StyleSheet} from 'react-native';

export default function SignUp({navigation}) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [authName, setAuthName] = React.useState('');
    const [authCode, setAuthCode] = React.useState('');

    const onSignUpSubmit = () => {
        signUp();
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

    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(authName, authCode)
            console.log('User signup successfully')
            navigation.navigate('Login');
        } catch (error) {
            console.log('Error Signing up')
        }
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
                onChangeText={text => setPassword(text)}
            />
            <TextInput style={{backgroundColor: 'rgba(14, 80, 9, .85)'}}
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Button mode="contained" onPress={onSignUpSubmit}>Sign Up</Button>
            <Button mode="contained" onPress={() => navigation.navigate('Login')} style={{ top: 10 }}>Back to Log In</Button>

            <TextInput 
                style={{ top: 10, backgroundColor: 'rgba(14, 80, 9, .85)'}}
                label="Confirm Username"
                value={authName}
                onChangeText={text => setAuthName(text)}
            />

            <TextInput 
                style={{ top: 10, backgroundColor: 'rgba(14, 80, 9, .85)' }}
                label="Authentication"
                value={authCode}
                onChangeText={text => setAuthCode(text)}
            />

            <Button mode="contained" onPress={confirmSignUp} style={{ top: 10 }}>Authenticate</Button>
        </ImageBackground>
        </View>

    );
}

const card = StyleSheet.create({
    view: {
        backgroundColor: 'rgba(14, 80, 9, .85)',
        flex: 1,
    },
    thread: {
        width:'80%',
        padding: '3.5%',
        marginBottom: '5%',
        marginTop: '5%',
        marginLeft: '9%',
        backgroundColor: 'rgba(40, 199, 9, 0.5)',
        alignContent: 'center',
        margin: 'auto',
    },
})