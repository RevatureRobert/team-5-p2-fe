import {ThreadAction, IAppThreadActions, UserAction, IAppUserActions} from "./types/action_types";
import {IAppThreadState, initialState, IAppUserState, initState} from "./Store";

export const reducersThread = (state: IAppThreadState = initialState, action: IAppThreadActions): IAppThreadState => {
    const newState= {...state};
    switch(action.type){
        case ThreadAction.ADD_THREAD:
            newState.threads.push(action.payload.thread)
            return newState;
        case ThreadAction.SELECT_THREAD:
            return newState;
        case ThreadAction.REMOVE_THREAD:
            newState.threads = newState.threads.filter(thread => thread.id !== action.payload.thread.id)
            return newState
        case ThreadAction.GET_ALL:
            const data = action.payload;
            for (let i = 0; i < 10; i++) {
                newState.threads.push({
                    id: data[i].id,
                    title: data[i].title,
                    description: data[i].body,
                    author: 'author ' + data[i].userId,
                })
            }
            console.log('Get_all_action');
            return newState;
        default:
            return newState;
    }
}

export const reducersUser = (state: IAppUserState = initState, action: IAppUserActions): IAppUserState => {
    const newState= {...state};
    switch(action.type){
        case UserAction.ADD_USER:
            newState.users.push(action.payload.user);
            newState.loggedIn = true;
            return newState;
        case UserAction.SELECT_USER:

            return newState;
        case UserAction.EDIT_USER:

            return newState;
        case UserAction.REMOVE_USER:
            newState.users = newState.users.filter(user => user.id !== action.payload.user.id)
            return newState
        case UserAction.LOGIN_USER: 
            newState.loggedIn = true;
            return newState;
        case UserAction.LOGOUT_USER:
            newState.loggedIn = false;
            return newState;
        default:
            return newState;
    }
}