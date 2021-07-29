import React from 'react'
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/Store';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import CustomLogIn from '../components/CustomLogIn'

export default function Login() {

    return(
        <CustomLogIn/> 
    ) 
}