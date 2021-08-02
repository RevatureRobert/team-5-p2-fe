import React from 'react';
import {iThread} from '../custom_types/object_types';
import { Button, Card, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../redux/Store';
import LikesAndDislikes from './LikesAndDislikes';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
// import * as style from './site.css';

interface IProps {
    thread: iThread;
}
const Threads: React.FC<IProps> = (props: IProps) =>{
    const loggedIn = useSelector((state: IAppState) => state.userState.loggedIn)
    const dispatch = useDispatch();




    return(
        <View style= {card.view}>
                <Card style={card.thread}>
                    <Card.Title titleNumberOfLines={10} titleStyle={{flexWrap:'wrap'}} title = {props.thread.title} subtitle= {props.thread.author}/>
                    <Card.Content>
                        <Paragraph>{props.thread.description}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        {loggedIn ? <LikesAndDislikes {...props} /> : null}
                    </Card.Actions>
                </Card>
        </View>

    );
}

const card = StyleSheet.create({
    view: {
        backgroundColor: 'rgba(14, 80, 9, .85)',
    },
    thread: {
        width:'80%',
        padding: '3.5%',
        marginBottom: '5%',
        marginTop: '5%',
        marginLeft: '9%',
        backgroundColor: 'rgba(40, 199, 9, 0.5)',
        alignContent: 'center',
        margin: 'auto',
    },
})

export default Threads;