import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper'

function LikesAndDislikes(props) {
    const [like, setLike] = React.useState(false)
    const [dislike, setDislike] = React.useState(false)

    function addLike(){
        props.thread.likes++;
        console.log(props.thread.likes)
    }

    function addDislike(){
        props.thread.dislikes++;
        console.log(props.thread.dislikes)
    }

    function removeLike(){
        props.thread.likes--;
        console.log(props.thread.likes)
    }

    function removeDislike(){
        props.thread.dislikes--;
        console.log(props.thread.dislikes)
    }

    function onLike(){
        console.log(like)
        if(like){
            removeLike()
            setLike(!like)
        } else{
            addLike()
            setLike(!like)
        }
    }

    function onDislike(){
        if(dislike){
            removeDislike()
            setDislike(!dislike)
        } else{
            addDislike()
            setDislike(!dislike)
        }
    }
    return (
        <View>
            <Card style = {card.thread}>
                    {like ? <Button icon="arrow-up-circle" onPress={onLike} >{props.thread.likes}</Button> : <Button icon="arrow-up-circle-outline" onPress={onLike} >{props.thread.likes}</Button>}
                    {dislike ? <Button icon="arrow-down-circle" onPress={onDislike} >{props.thread.dislikes}</Button> : <Button icon="arrow-down-circle-outline" onPress={onDislike} >{props.thread.dislikes}</Button>}
            </Card>
        </View>
    )
}

const card = StyleSheet.create({
    title: {
        width: '50%',
        margin: 'auto',
        // padding: '1em',
        // marginBottom: '10px',
        // backgroundColor: '#279',
    },
    view: {
        // color: '#123'
    },
    sub: {
        // fontSize: 30,
        // color: '#000'
    },
    thread: {
        width: '50%',
        margin: 'auto',
    },
    text: {
        fontSize: 30,
        color: '#000'
    },
})


export default LikesAndDislikes
