import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Thread from '../components/Thread';
import {iThread} from '../components/models'
import { useSelector } from 'react-redux';
import {IAppThreadState} from '../redux/Store';


export default function Home({navigation}) {

   const threads = useSelector((state:IAppThreadState) => state.threads);

    return (
    <View>
        {threads.map((thread:iThread) => (<Thread key={thread.id} thread={thread}/>))}  
    </View>
    );
}