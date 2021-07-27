import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Thread from '../components/Thread';
import {iThread} from '../components/models'
import { useSelector } from 'react-redux';
import {IAppState} from '../redux/Store';
import { IAppThreadActions } from '../redux/Actions';


export default function Home({navigation}) {

   const threads = useSelector((state:IAppState) => state.threadState.threads);

    return (
    <View>
        {threads.map((thread:iThread) => (<Thread key={thread.id} thread={thread}/>))}  
    </View>
    );
}