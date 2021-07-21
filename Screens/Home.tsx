import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Thread from '../components/Thread';
import {iThread} from '../components/models'
import {threads} from '../mockDB'

export default function Home({ navigation }) {

   
    return (
    <View>
        {threads.map((thread:iThread) => (<Thread key={thread.id} thread={thread}/>))}  
    </View>
    );
}