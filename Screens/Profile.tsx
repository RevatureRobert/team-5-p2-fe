import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Profile() {
    return (
        <View>
            <Appbar>
                <Appbar.Content title="Profile" subtitle="A Profile Page" />
                <Appbar.Action icon="face-profile" />
            </Appbar>
        </View>
    );
}

