import { API } from "aws-amplify";
import axios from "axios";
import { ThreadAction } from "../custom_types/action_types"

//Fetch All Threads Action
export function fetchThreads() {
    return async (dispatch) => {
        try {
            const apiName = 'threadAPI';
            const path = '/threads'; 
            const myInit = {};
            const data = await API.get(apiName, path, myInit)
            dispatch(setThreads(data))
        } catch (e) {
            console.log('error', e);
        }
    };
}
function setThreads(data) {
    return {
        type: ThreadAction.GET_ALL,
        payload: {
            threadArray: data,
        }
    };
}

