import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Thread from '../components/Thread';
import {iThread} from '../custom_types/object_types'
import { useSelector } from 'react-redux';
import {IAppState} from '../redux/Store';
import {useDispatch} from 'react-redux';
import { fetchThreads } from '../redux/Thunks';

const onMountFetch = (someFetchActionCreator) => { //Fetch All Threads
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(someFetchActionCreator());
    }, []);
}

export default function Home({navigation}) {

    onMountFetch(fetchThreads);

    const threads = useSelector((state:IAppState) => state.threadState.threads);

    return (
    <View>
        {threads.map((thread:iThread) => (<Thread key={thread.id} thread={thread}/>))}  
    </View>
    );
}