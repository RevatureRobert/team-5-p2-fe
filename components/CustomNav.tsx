import React from 'react'
import { View,Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import Modal from './CustomLogInModal';

export default function CustomNav(props) {

    return(
        <View>
            <Appbar.Header>
                {props.previous ? <Appbar.BackAction onPress={props.navigation.goBack} /> : null}
                <Appbar.Content title="Sylph"/>
                {props.loggedIn ? <Appbar.Action icon="tooltip-plus" onPress={() => props.setAddThreadVisible(true)}/> : null}
                {props.loggedIn ? <Appbar.Action icon="account" onPress={() => props.navigation.navigate('Profile')} /> : <Appbar.Action icon="account-plus-outline" onPress={props.setVisible}/>}
            </Appbar.Header>
        </View>
    );
}