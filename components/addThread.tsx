import React, {useCallback, useState} from 'react'
import { View,Text } from 'react-native';
import { Modal, TextInput, Portal, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ThreadAction} from '../redux/Actions';
import {IAppThreadState} from '../redux/Store';
import {iThread} from './models';
import Thread from './Thread'


export default function addThread({visible, setVisible, onAdd}: {visible: any; setVisible: any; onAdd: any}) {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [post, setPost] = React.useState('');

    const addNewItemtoDB = () => {
        addClick();
        hideModal();
        setTitle('');
        setDescription('');
        setAuthor('');
        setPost('');
    } 

    const dispatch = useDispatch();

    const addClick = () => {
        dispatch({
            type: ThreadAction.ADD_THREAD,
           
            payload: {
                thread: {
                    id: Math.floor(Math.random() * 10000) + 1,
                    title,
                    description,
                    author,
                    post,
                }
            }
        }
        )
    }


    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, margin: 'auto'};

    return(
        <View>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <TextInput label="Title" value={title} onChangeText= {text => setTitle(text)} />
                    <TextInput label="Description" value={description} onChangeText= {text => setDescription(text)} />
                    <TextInput label="Author" value={author} onChangeText= {text => setAuthor(text)} />
                    <TextInput label="Post" value={post} onChangeText= {text => setPost(text)} />
                    <Button mode= "contained" onPress={addNewItemtoDB}>Add Thread</Button>
                </Modal>
            </Portal>
        </View>
    );
}