import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { IAppState } from '../redux/Store';
import { postThread } from '../redux/Thunks';
import { View } from 'react-native';


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
        <View>
            <TextInput label="Title" value={title} onChangeText= {text => setTitle(text)} />
            <TextInput label="Description" value={description} onChangeText= {text => setDescription(text)} />
            <Button mode= "contained" onPress={onAddSubmit}>Add Thread</Button>
        </View>
    );
}