import { API } from "aws-amplify";
import axios from "axios";
import { ThreadAction } from "../custom_types/action_types"

//customize axios
const server = axios.create({
    baseURL: "https://4joy85d5dd.execute-api.us-east-2.amazonaws.com/staging"
})

//Fetch All Threads Action
export function fetchThreads() {
    return async (dispatch) => {
        try {


            const apiName = 'threadAPI';
            const path = '/threads'; 
            const myInit = {};
            
            API
                .get(apiName, path, myInit)
                .then(response => {
                    console.log(response)
                    dispatch(setThreads(response))
                })
                .catch(error => {
                    console.log(error);
                });
            
        } catch (e) {
            console.log('error', e);
        }
    };
}
function setThreads(data) {
    return {
        type: ThreadAction.GET_ALL,
        payload: {
            thread: data
        }
    };
}

