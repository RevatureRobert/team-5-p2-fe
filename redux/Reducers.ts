import {ThreadAction, IAppThreadActions, UserAction, IAppUserActions} from "./Actions";
import {IAppThreadState, initialState, IAppUserState, initState} from "./Store";

export const reducersThread = (state: IAppThreadState = initialState, action: IAppThreadActions): IAppThreadState => {
    const newState= {...state};
    switch(action.type){
        case ThreadAction.ADD_THREAD:
            newState.threads.push(action.payload.thread)
            newState.editThreadState.currentThread= newState.threads.length-1;
            newState.editThreadState.edit=true;
            console.log(newState)
            return newState;
        case ThreadAction.SELECT_THREAD:
            newState.editThreadState.currentThread = action.payload.selection;
            newState.editThreadState.edit=true;
            return newState;
        case ThreadAction.EDIT_THREAD:
            newState.threads = [
                ...newState.threads.slice(0, newState.editThreadState.currentThread),
                action.payload.thread,
                ...newState.threads.slice(newState.editThreadState.currentThread + 1, newState.threads.length)
            ];
            newState.editThreadState.currentThread=-1;
            newState.editThreadState.edit=false;
            return newState;
        case ThreadAction.REMOVE_THREAD:
            newState.threads = newState.threads.filter(thread => thread.id !== action.payload.thread.id)
            return newState
        default:
            return newState;
    }
}

export const reducersUser = (state: IAppUserState = initState, action: IAppUserActions): IAppUserState => {
    const newState= {...state};
    switch(action.type){
        case UserAction.ADD_USER:
            newState.users.push({username: '', id: 0, password: '', email: ''})
            newState.editUserState.currentUser= newState.users.length-1;
            newState.editUserState.edit=true;
            return newState;
        case UserAction.SELECT_USER:
            newState.editUserState.currentUser = action.payload.selection;
            newState.editUserState.edit=true;
            return newState;
        case UserAction.EDIT_USER:
            newState.users = [
                ...newState.users.slice(0, newState.editUserState.currentUser),
                action.payload.user,
                ...newState.users.slice(newState.editUserState.currentUser + 1, newState.users.length)
            ];
            newState.editUserState.currentUser=-1;
            newState.editUserState.edit=false;
            return newState;
        case UserAction.REMOVE_USER:
            newState.users = newState.users.filter(user => user.id !== action.payload.user.id)
            return newState
        case UserAction.LOGIN_USER: 
            newState.loggedIn = true;
            return newState;
        default:
            return newState;
    }
}