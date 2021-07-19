import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Thread() {
    return(
        <View>
            <Card style = {card.thread}>
                <Card.Title title = "Threads" subtitle= "Test" />
                <Card.Content>
                    <Title style={card.text}>Henlo Fren</Title>
                    <Paragraph>Testing</Paragraph>
                <Card.Cover style = {{width: '30%', alignItems:'center'}} source={{ uri: 'https://picsum.photos/700' }}/>
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
    thread: {
        width: '50%',
        margin: 'auto',
    },
    text: {
        fontSize: 30,
        color: '#000'
    },
})