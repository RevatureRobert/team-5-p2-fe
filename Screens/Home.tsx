import React from 'react';
import { View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Home({ navigation }) {
    return (
    <View>
        <Appbar>
            <Appbar.Content title="Home" subtitle="Possible Landing Page" />
            <Appbar.Action icon="face-profile" />
            <Button
                title="Go to profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </Appbar>
    </View>
    );
}

