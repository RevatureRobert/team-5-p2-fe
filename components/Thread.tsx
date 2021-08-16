import React from 'react';
import {iThread} from '../custom_types/object_types';
import { Button, Card, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';
// import * as style from './site.css';

interface IProps {
    thread: iThread;
}
const Threads: React.FC<IProps> = (props: IProps) =>{

    return(
        <View style= {card.view}>
            {/* <ImageBackground style={{flex: 1, width: '100%', height: '100%'}} source={require('./Forest_Background.jpg')}> */}
                <Card style={card.thread}>
                    <Card.Title  titleNumberOfLines={10} titleStyle={{flexWrap:'wrap', color:'white'}} subtitleStyle={{color:'white'}} title = {props.thread.title} subtitle= {props.thread.author}/>
                    <Card.Content>
                        <Paragraph style={{color:'white'}}>{props.thread.description}</Paragraph>
                    {/* <Card.Cover style = {images.size} source={{ uri: 'https://picsum.photos/700' }}/> */}
                    </Card.Content>
                    <Card.Actions>
                        <Button color= 'white' icon="arrow-up-circle-outline"> </Button>
                      <Button color= 'white' icon="arrow-down-circle-outline"> </Button>
                    </Card.Actions>
                </Card>
            {/* </ImageBackground> */}
        </View>

    );
}

const card = StyleSheet.create({
    view: {
        backgroundColor: 'rgba(12, 65, 12, .85)',
    },
    thread: {
        width:'80%',
        padding: '3.5%',
        marginBottom: '5%',
        marginTop: '5%',
        marginLeft: '9%',
        backgroundColor: 'rgba(37, 101, 37, .7)',
        alignContent: 'center',
        margin: 'auto',
    },
})

export default Threads;