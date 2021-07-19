import React from 'react';
import { View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Home({ navigation }) {
    return (
    <View>
        <Button
            title="Go to profile"
            onPress={() => navigation.navigate('Profile')}
        />
    </View>
    );
}

