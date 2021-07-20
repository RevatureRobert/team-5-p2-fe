import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Thread from '../components/Thread';
import {iThread} from '../components/models'

export default function Home({ navigation }) {

    const threads = [
    {
        title: "Testing Boi",
        author: "Jacob",
        description: "IDK if this will work or not?",
        post: "This is a test to see if this will work",
        id: 0,
    }, 
    {
        title: "Hey",
        author: "Tyler",
        description: "This is also a test",
        post: "Trying to get this all to work",
        id: 1,
    }];
    return (
    <View>
        {threads.map((thread:iThread) => (<Thread key={thread.id} thread={thread}/>))}  
    </View>
    );
}