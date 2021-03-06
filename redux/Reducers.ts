import {ThreadAction, IThreadActions, UserAction, IUserActions} from "../custom_types/action_types";
import {IAppThreadState, initialThreadState, IAppUserState, initialUserState} from "./Store";

export const reducersThread = (state: IAppThreadState = initialThreadState, action: IThreadActions): IAppThreadState => {
    const newState= {...state};
    switch(action.type){
        case ThreadAction.ADD_THREAD:
            newState.threads = [...newState.threads, action.payload.thread];
            return newState;
        case ThreadAction.REMOVE_THREAD:
            //newState.threads = newState.threads.filter(thread => thread.id !== action.payload.thread.id)
            return newState
        case ThreadAction.GET_ALL:
            newState.threads = [...newState.threads, ...action.payload.threadArray];
            return newState;
        default:
            return newState;
    }
}

export const reducersUser = (state: IAppUserState = initialUserState, action: IUserActions): IAppUserState => {
    const newState= {...state};
    switch(action.type){
        case UserAction.ADD_USER:
            newState.users.push(action.payload.user);
            return newState;
        case UserAction.EDIT_USER:
            newState.currentUser = action.payload.user;
            return newState;
        case UserAction.REMOVE_USER:
            // newState.users = newState.users.filter(user => user.id !== action.payload.user.id)
            return newState
        case UserAction.LOGIN_USER:
            newState.currentUser = action.payload.user;
            newState.loggedIn = true;
            return newState;
        case UserAction.LOGOUT_USER:
            newState.loggedIn = false;
            return newState;
        default:
            return newState;
    }
}