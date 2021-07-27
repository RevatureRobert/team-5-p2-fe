import React from 'react'
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/Store';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


export default function CustomNav(props) {

    const loggedIn = useSelector((state: IAppState) => state.userState.loggedIn)
    return(
        <View>
            <Appbar.Header>
                {props.previous ? <Appbar.BackAction onPress={props.navigation.goBack} /> : null}
                <Appbar.Content title="Sylph"/>
                {loggedIn ? <Appbar.Action icon="tooltip-plus" onPress={() => props.setAddThreadVisible(true)}/> : null}
                {loggedIn ? <Appbar.Action icon="account" onPress={() => props.navigation.navigate('Profile')} /> : <Appbar.Action icon="account-plus-outline" onPress={props.setVisible}/>}
            </Appbar.Header>
        </View>
    );
}