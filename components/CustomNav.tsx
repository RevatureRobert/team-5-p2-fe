import React from 'react'
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/Store';

export default function CustomNav({previous, navigation}) {

    const loggedIn = useSelector((state: IAppState) => state.userState.loggedIn)
    return(
        <View>
            <Appbar.Header>
                {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
                <Appbar.Content title="Sylph"/>
                {loggedIn ? <Appbar.Action icon="tooltip-plus" onPress={() => navigation.navigate('ThreadAdd')}/> : null}
                {loggedIn ? <Appbar.Action icon="account" onPress={() => navigation.navigate('Profile')} /> : <Appbar.Action icon="account-plus-outline" onPress={() => navigation.navigate('Login')}/>}
            </Appbar.Header>
        </View>
    );
}