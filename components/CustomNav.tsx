import React from 'react'
import { View,Text } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function CustomNav(props, {navigation, previous}: any) {

    return(
        <View>
            <Appbar.Header>
                {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
                <Appbar.Content title="Sylph"/>
                {props.loggedIn ? <Appbar.Action icon="tooltip-plus"/> : null}
                {props.loggedIn ? <Appbar.Action icon="account-check"/> : <Appbar.Action icon="account-plus"/>}
            </Appbar.Header>
        </View>
    );
}