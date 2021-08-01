import React from 'react';
import {iThread} from '../custom_types/object_types';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../redux/Store';
import LikesAndDislikes from './LikesAndDislikes';

interface IProps {
    thread: iThread;
}

const Threads: React.FC<IProps> = (props: IProps) =>{
    const loggedIn = useSelector((state: IAppState) => state.userState.loggedIn)
    const dispatch = useDispatch();




    return(
        <View >
            <Card style = {card.thread}>
                <Card.Title title = {props.thread.title} subtitle= {props.thread.author}/>
                <Card.Content>
                    <Paragraph>{props.thread.description}</Paragraph>
                {/* <Card.Cover style = {images.size} source={{ uri: 'https://picsum.photos/700' }}/> */}
                </Card.Content>
                <Card.Actions>
                    {loggedIn ? <LikesAndDislikes {...props}/> : null}
                </Card.Actions>
            </Card>
        </View>

    );
}

const card = StyleSheet.create({
    title: {
        width: '50%',
        margin: 'auto',
        // padding: '1em',
        // marginBottom: '10px',
        // backgroundColor: '#279',
    },
    view: {
        // color: '#123'
    },
    sub: {
        // fontSize: 30,
        // color: '#000'
    },
    thread: {
        width: '50%',
        margin: 'auto',
    },
    text: {
        fontSize: 30,
        color: '#000'
    },
})


// const images = StyleSheet.create({
//     size: {
//         // width: '30%', 
//         // alignItems:'center'
//     }
// })

export default Threads;