import React from 'react'
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function CustomNav({navigation, previous}) {
    return(
        <View>
            <Appbar.Header>
                {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
                <Appbar.Content title="Sylph"/>
            </Appbar.Header>
        </View>
    );
}