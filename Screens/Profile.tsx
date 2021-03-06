import React from 'react';
import { Avatar, Title, Button, Card, Divider, Paragraph } from 'react-native-paper';
import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../custom_types/action_types';
import { IAppState } from '../redux/Store';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Profile({navigation}) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state: IAppState) => state.userState.currentUser)

    async function signOut() {
        try {
            await Auth.signOut();
            console.log('User Successfully Logged out')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const logOutDispatcher = () => {
        dispatch({
        type: UserAction.LOGOUT_USER,
        payload: {
            }
        })
    }
    const onLogOutPress = () => {
        signOut();
        logOutDispatcher();
        navigation.navigate('Home');
    }
    return (
        <View style={card.container}>
        <ImageBackground source={require('../components/Forest_Background.jpg')}  style={{flex: 1}}>
            <Card style={{backgroundColor: 'rgba(14, 80, 9, .85)'}}>
                <Card.Title title={currentUser.username} subtitle={currentUser.email} left={() => <Avatar.Text size={48} label={currentUser.username[0]} />} />
                <Card.Content>
                    <Title>About Me</Title>
                    <Paragraph>
                        {currentUser.profile}
                    </Paragraph>
                    <Divider/>
                <Card.Content>
                    <Button  mode="contained" onPress={() => navigation.navigate('EditProfile')} >Edit</Button>
                    <Button onPress={onLogOutPress}   mode="contained">Logout</Button>
                    <Button mode="contained">Delete</Button>
                </Card.Content>
                </Card.Content>
            </Card>
            </ImageBackground>
        </View>
    );
}

const card = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(14, 80, 9, .85)',
        flex: 1,
      },
  })