import React from 'react';
import {iThread} from '../custom_types/object_types';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

interface IProps {
    thread: iThread;
}

const Threads: React.FC<IProps> = (props: IProps) =>{
    return(
        <View >
            <Card style = {card.thread}>
                <Card.Title title = {props.thread.title} subtitle= {props.thread.author}/>
                <Card.Content>
                    <Paragraph>{props.thread.description}</Paragraph>
                {/* <Card.Cover style = {images.size} source={{ uri: 'https://picsum.photos/700' }}/> */}
                </Card.Content>
                <Card.Actions>
                    <Button icon="arrow-up-circle-outline"> </Button>
                    <Button icon="arrow-down-circle-outline"> </Button>
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