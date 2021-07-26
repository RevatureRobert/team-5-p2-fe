import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Divider, Headline, Paragraph, Subheading, Title } from 'react-native-paper';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { UserAction } from '../redux/Actions';

export default function Profile({navigation}) {
    const dispatch = useDispatch();

    const onSignOutPress = () => {
        signOut();
        logoutDispatcher();
        navigation.navigate('Home')
    }

    async function signOut() {
        try {
            await Auth.signOut();
            console.log('User Successfully Logged out')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const logoutDispatcher = () => {
        dispatch({
        type: UserAction.LOGOUT_USER,
        payload: {
        }
        })
    }
    return (
        <View>
            <Card style= {profileStyle.card}>
                <Card.Title title="UserName" subtitle="Card Subtitle" left={() => <Avatar.Text size={48} label="UN" />} />
                <Card.Content>
                    <Title>About Me</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate voluptate ut quae natus, tempore iste facere pariatur et corrupti doloremque iusto ducimus obcaecati officiis! Tenetur commodi officia excepturi saepe!
                    </Paragraph>
                    <Divider/>
                <Card.Content>
                    <Button style={profileStyle.button} mode="outlined" onPress={onSignOutPress}>Sign Out</Button>
                    <Button style={profileStyle.button} mode="outlined">Edit</Button>
                    <Button style={profileStyle.button} mode="contained">Delete</Button>
                </Card.Content>
                </Card.Content>
            </Card>
        </View>
    );
}

const profileStyle = StyleSheet.create({
    card: {
        width: '90%',
        margin: 'auto',
        marginTop: '3em',
        paddingVertical: '1em',
    },
    button: {
        marginTop: '1em',
       
    }
})