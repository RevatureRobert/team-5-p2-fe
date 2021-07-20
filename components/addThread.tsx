import React, {useState} from 'react'
import { View,Text } from 'react-native';
import { Modal, TextInput, Portal } from 'react-native-paper';

export default function AddThread(props) {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [post, setPost] = React.useState('');



    const hideModal = () => props.setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, margin: 'auto'};

    return(
        <View>
            <Portal>
                <Modal visible={props.visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <TextInput label="Title" value={title} onChangeText= {text => setTitle(text)} />
                    <TextInput label="Description" value={description} onChangeText= {text => setDescription(text)} />
                    <TextInput label="Author" value={author} onChangeText= {text => setAuthor(text)} />
                    <TextInput label="Post" value={post} onChangeText= {text => setPost(text)} />
                </Modal>
            </Portal>
        </View>
    );
};