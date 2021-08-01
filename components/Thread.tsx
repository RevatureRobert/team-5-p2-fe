import React from 'react';
import {iThread} from '../custom_types/object_types';
import { Button, Card, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface IProps {
    thread: iThread;
}

const Threads: React.FC<IProps> = (props: IProps) =>{

    return(
        <View >
            <Card style = {card.thread}>
                <Card.Title titleNumberOfLines={2} titleStyle={{flexWrap:'wrap'}} title = {props.thread.title} subtitle= {props.thread.author}/>
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
        // width: '50%',
        margin: 'auto',
        padding: '1em',
        marginBottom: '10px',
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
        // width: '50%',
        margin: 'auto',
    },
    text: {
        // fontSize: 30,
        // color: '#000'
    },
    container: {
        width: 0,
        flexGrow: 1,
        flex: 1,
    },
})


// const images = StyleSheet.create({
//     size: {
//         // width: '30%', 
//         // alignItems:'center'
//     }
// })

export default Threads;