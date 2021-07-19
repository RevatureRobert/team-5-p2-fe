import React from 'react';
import { View, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Home({ navigation }) {
    return (
    <View>
        <Card style = {{width: '50%', height: '50%', margin: 'auto'}}>
            <Card.Title title = "Threads" subtitle= "Test" />
            <Card.Content>
                <Title>Henlo Fren</Title>
                <Paragraph>Testing</Paragraph>
            <Card.Cover style = {{width: 30, height: 30}} source={{ uri: 'https://picsum.photos/700' }}/>
            </Card.Content>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    </View>
    );
}