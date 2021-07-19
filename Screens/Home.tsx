import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Thread from '../components/Thread';

export default function Home({ navigation }) {
    return (
    <View>
        <Thread />
    </View>
    );
}