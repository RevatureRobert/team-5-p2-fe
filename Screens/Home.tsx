import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Thread from '../components/Thread';
import {iThread} from '../components/models'
import { useSelector } from 'react-redux';
import {IAppState} from '../redux/Store';
import { IAppThreadActions } from '../redux/Actions';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import addThread from '../components/AddThread';
import {ThreadAction} from '../redux/Actions';
import { fetchThreads } from '../redux/actions/index';

const useFetching = (someFetchActionCreator) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(someFetchActionCreator());
    }, []);
}

export default function Home({navigation}) {

    useFetching(fetchThreads);

    const threads = useSelector((state:IAppState) => state.threadState.threads);
    
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     fetchThreads();
    //     // getAllThreads();
    // })

   

    const getAllThreads = async () => {
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            for (let i = 0; i < 10; i++) {
                dispatch({
                    type: ThreadAction.ADD_THREAD,
                    payload: {
                        thread: {
                            id: res.data[i].id,
                            title: res.data[i].title,
                            description: res.data[i].body ,
                            author: 'author ' + res.data[i].userId,
                        }
                    }
                })
            }
            
            return res.data;
        } catch(e) {
            console.error(e);
        }
    };

    return (
    <View>
        {threads.map((thread:iThread) => (<Thread key={thread.id} thread={thread}/>))}  
    </View>
    );
}