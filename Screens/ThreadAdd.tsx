import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { IAppState } from '../redux/Store';
import { postThread } from '../redux/Thunks';
import { ImageBackground, View , StyleSheet} from 'react-native';

export default function ThreadAdd({navigation}) {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')

    const onAddSubmit = () => {
        dispatch(postThread({
            id: Math.floor(Math.random() * 10000) + 1,
            title,
            description,
            author: currentUserName,
            likes: 0,
            dislikes: 0
        }))
        setTitle('');
        setDescription('');
        navigation.navigate('Home')
    } 
    
    const currentUserName = useSelector((state: IAppState) => state.userState.currentUser.username)

    return(
        <View style={card.view}>
        <ImageBackground source={require('../components/Forest_Background.jpg')}  style={{flex: 1}}>
            <TextInput style={{backgroundColor: 'rgba(14, 80, 9, .85)'}} label="Title" value={title} onChangeText= {text => setTitle(text)} />
            <TextInput style={{backgroundColor: 'rgba(14, 80, 9, .85)'}} label="Description" value={description} onChangeText= {text => setDescription(text)} />
            <Button mode= "contained" onPress={onAddSubmit}>Add Thread</Button>
        </ImageBackground>
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
        flex: 1,
    },
})