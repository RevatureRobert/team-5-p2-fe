import { API } from "aws-amplify";
import { ThreadAction } from "../custom_types/action_types"
import { iThread } from "../custom_types/object_types";

const apiName = 'threadAPI';
const myInit = {};

//Fetch All Threads Action
export function fetchThreads() {
    return async (dispatch) => {
        try {
            const path = '/threads';
            const data = await API.get(apiName, path, {})
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

//Post a Thread Action
export function postThread(newThread: iThread) {
    return async (dispatch) => {
        try {
            const path = '/threads';
            await API.post(apiName, path, {body: newThread});

            dispatch(addNewThread(newThread));
        } catch (e) {
            console.log('error', e);
        }
    }
}
function addNewThread(newThread:iThread) {
    return {
        type: ThreadAction.ADD_THREAD,
        payload: {
            thread: newThread,
    }
}
}