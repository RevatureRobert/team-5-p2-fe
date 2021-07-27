import { iThread, iUser } from "./object_types";

//rootreducer parameter type
export interface IAppActions {
    user: IUserActions;
    thread: IThreadActions;
}

//THREAD
//actions
export enum ThreadAction {
    GET_ALL = 'Get All',
    ADD_THREAD = 'Add Thread',
    REMOVE_THREAD = 'Remove Thread',
    EDIT_THREAD = 'Edit Thread',
    SELECT_THREAD = 'Select Thread',
}
//reducer parameter type
export interface IThreadActions {
    type: ThreadAction;
    payload: {
        thread: iThread,
        selection: number
    }
}

//USER
//actions
export enum UserAction {
    ADD_USER = 'Add User',
    REMOVE_USER = 'Remove User',
    EDIT_USER = 'Edit User',
    SELECT_USER = 'Select User',
    LOGIN_USER = 'Login User',
    LOGOUT_USER = 'Logout User,'
}
//reducer parameter type
export interface IUserActions {
    type: UserAction;
    payload: {
        user: iUser,
        selection: number
    }
}