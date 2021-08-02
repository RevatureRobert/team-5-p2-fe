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
    <SafeAreaView >
        {/* <ImageBackground source={require('../components/Forest_Background.jpg')}  style={{flex: 1, width: '100%', height: '100%'}}> */}
            <FlatList
                data={threads}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                >
            </FlatList>
        {/* </ImageBackground> */}
    </SafeAreaView>
    );
}

const style = StyleSheet.create({
    flat:{
        alignContent: 'center',
        margin: 'auto',
    }
})

const card = StyleSheet.create({
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
    },
    
    container: {
        // position: 'relative',
        // resizeMode: 'cover'
      },
})