import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Divider, Headline, Paragraph, Subheading, TextInput, Title } from 'react-native-paper';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../custom_types/action_types';
import { IAppState } from '../redux/Store';

export default function EditProfile({navigation}) {
    const dispatch = useDispatch();
    const [profile, setProfile] = React.useState('');
    const currentUser = useSelector((state: IAppState) => state.userState.currentUser)

    async function authProfileEdit() {
        let user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
            'profile': profile
        })

        navigation.navigate('Profile')
    }

    const editDispatcher = () => {
        dispatch({
          type: UserAction.EDIT_USER,
          payload: {
            user: {
                id: currentUser.id,
                username: currentUser.username,
                password: currentUser.password,
                email: currentUser.email,
                profile: profile
            }
          }
        })
      }

      const onButtonPush = () => {
          editDispatcher();
          authProfileEdit();
      }

    return(
        <View>
            <Card style= {profileStyle.card}>
                <Card.Content>
                    <TextInput
                        label="Edit Profile"
                        value={profile}
                        onChangeText={text => setProfile(text)}
                    />
                </Card.Content>
                <Card.Content>
                    <Button style={profileStyle.button} mode="outlined" onPress={onButtonPush}>Edit</Button>
                </Card.Content>
            </Card>
        </View>
    )
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