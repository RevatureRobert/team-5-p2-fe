import React, { useEffect } from 'react';
import { View } from 'react-native';
import Thread from '../components/Thread';
import {iThread} from '../custom_types/object_types'
import { useSelector } from 'react-redux';
import {IAppState} from '../redux/Store';
import {useDispatch} from 'react-redux';
import { fetchThreads } from '../redux/Thunks';



export default function Home({navigation}) {
    const threads = useSelector((state:IAppState) => state.threadState.threads);
    const dispatch = useDispatch();
    const useFetching = (someActionCreator) => {
        useEffect(() => {
            dispatch(someActionCreator());
        },[])
    }

    useFetching(fetchThreads);
    
    return (
    <View>
            {threads.map((thread: iThread) => (<Thread key={thread.id} thread={thread} />))}
    </View>
    );
}