import React from 'react'
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ThreadAction} from '../custom_types/action_types';
import { IAppState } from '../redux/Store';


export default function ThreadAdd({navigation}) {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')

    const onAddSubmit = () => {
        addNewThread();
        setTitle('');
        setDescription('');
        navigation.navigate('Home')
    } 
    
    
    const currentUserName = useSelector((state: IAppState) => state.userState.currentUser.username)
    const addNewThread = () => {
        dispatch({
            type: ThreadAction.ADD_THREAD,
            payload: {
                thread: {
                    id: Math.floor(Math.random() * 10000) + 1,
                    title,
                    description,
                    author: currentUserName,
                }
            }
        })
    }

    return(
        <View>
            <TextInput label="Title" value={title} onChangeText= {text => setTitle(text)} />
            <TextInput label="Description" value={description} onChangeText= {text => setDescription(text)} />
            <Button mode= "contained" onPress={onAddSubmit}>Add Thread</Button>
        </View>
    );
}