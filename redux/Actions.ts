import axios from "axios";
import { ThreadAction } from "./types/action_types"

//Fetch All Threads Action
export function fetchThreads() {
    return function (dispatch) {
        return axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
            dispatch(setThreads(data));
        });
    };
}
function setThreads(data) {
    return {
        type: ThreadAction.GET_ALL,
        payload: data
    };
}