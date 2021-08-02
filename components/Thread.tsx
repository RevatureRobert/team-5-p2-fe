import React from 'react';
import {iThread} from '../custom_types/object_types';
import { Button, Card, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
// import * as style from './site.css';

interface IProps {
    thread: iThread;
}
const Threads: React.FC<IProps> = (props: IProps) =>{

    return(
        <View style= {card.view}>
            {/* <ImageBackground style={{flex: 1, width: '100%', height: '100%'}} source={require('./Forest_Background.jpg')}> */}
                <Card style={card.thread}>
                    <Card.Title titleNumberOfLines={10} titleStyle={{flexWrap:'wrap'}} title = {props.thread.title} subtitle= {props.thread.author}/>
                    <Card.Content>
                        <Paragraph>{props.thread.description}</Paragraph>
                    {/* <Card.Cover style = {images.size} source={{ uri: 'https://picsum.photos/700' }}/> */}
                    </Card.Content>
                    <Card.Actions>
                        <Button icon="arrow-up-circle-outline"> </Button>
                      <Button icon="arrow-down-circle-outline"> </Button>
                    </Card.Actions>
                </Card>
            {/* </ImageBackground> */}
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
        backgroundColor: 'rgba(14, 80, 9, .85)',
        // zIndex: 1,
    },
    sub: {
        // fontSize: 30,
        // color: '#000'
    },
    thread: {
        //width: '1000%',
        width:'80%',
        padding: '3.5%',
        marginBottom: '5%',
        marginTop: '5%',
        marginLeft: '9%',
        backgroundColor: 'rgba(40, 199, 9, 0.5)',
        alignContent: 'center',
        margin: 'auto',
    },
    text: {
        // fontSize: 30,
        // color: '#000'
    },
    container: {
        resizeMode: 'cover'
        // position: 'relative',
        // resizeMode: 'cover'
      },
})


// const images = StyleSheet.create({
//     size: {
//         // width: '30%', 
//         // alignItems:'center'
//     }
// })

export default Threads;