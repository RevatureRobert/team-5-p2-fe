import axios from "axios";
import { ThreadAction } from "../custom_types/action_types"

//customize axios
const server = axios.create({
    baseURL: "https://xu5ym22fn4.execute-api.us-east-2.amazonaws.com/dev"
})

//Fetch All Threads Action
export function fetchThreads() {
    return async (dispatch) => {
        try {
            return await server.get("/threads").then(({ data }) => {
                dispatch(setThreads(data));
            });
        } catch (e) {
            console.log('error', e);
        }
    };
}
function setThreads(data) {
    return {
        type: ThreadAction.GET_ALL,
        payload: data
    };
}