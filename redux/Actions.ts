import {iThread, iUser} from "../components/models";

export enum ThreadAction {
    ADD_THREAD = 'Add Thread',
    REMOVE_THREAD = 'Remove Thread',
    EDIT_THREAD = 'Edit Thread',
    SELECT_THREAD = 'Select Thread' 
}

export interface IThreadActions {
    type: ThreadAction;
    payload: {thread:iThread}
}

export interface IAppThreadActions extends IThreadActions{
    type: ThreadAction;
    payload: {
        thread:iThread,
        selection: number
    }
}

export enum UserAction {
    ADD_USER = 'Add User',
    REMOVE_USER = 'Remove User',
    EDIT_USER = 'Edit User',
    SELECT_USER = 'Select User' 
}

export interface IUserActions {
    type: UserAction;
    payload: {user:iUser}
}

export interface IAppUserActions extends IUserActions{
    type: UserAction;
    payload: {
        user:iUser,
        selection: number
    }
}