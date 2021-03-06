import React, { useEffect } from 'react';
import Thread from '../components/Thread';
import { useSelector, useDispatch } from 'react-redux';
import {IAppState} from '../redux/Store';
import { fetchThreads } from '../redux/Thunks';
import { FlatList, View, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';



export default function Home({navigation}) {
    const threads = useSelector((state:IAppState) => state.threadState.threads);
    const dispatch = useDispatch();
    const useFetching = (someActionCreator) => {
        useEffect(() => {
            dispatch(someActionCreator());
        },[])
    }

    useFetching(fetchThreads);
    
    const renderItem = ({ item }) => (<Thread thread={item} />);

    return (
    <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={require('../components/Forest_Background.jpg')}  style={{flex: 1}}>
            <FlatList
                data={threads}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                >
            </FlatList>
        </ImageBackground>
    </SafeAreaView>
    );
}