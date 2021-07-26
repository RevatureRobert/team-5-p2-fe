import {iThread, iUser} from "../components/models"

export interface IAppState {
    user: IAppUserState;
    thread: IAppThreadState;
}

export interface IEditThreadState {
    currentThread: number;
    edit: boolean;
}

export interface IAppThreadState {
    editThreadState: IEditThreadState;
    threads: iThread[];
}

export const initialState: IAppThreadState = {
    editThreadState: {
        currentThread: -1,
        edit: false
    },
    threads: [
        {
            title: "Testing Boi 1",
            author: "Jacob",
            description: "IDK if this will work or not?",
            id: 0,
          },
          {
            title: "Hey",
            author: "Tyler",
            description: "This is also a test",
            id: 1,
          },]
}

export interface IEditUserState {
    currentUser: number;
    edit: boolean;
}

export interface IAppUserState {
    loggedIn: boolean;
    editUserState: IEditUserState;
    users: iUser[];
}

export const initState: IAppUserState = {
    loggedIn: false,
    editUserState: {
        currentUser: -1,
        edit: false
    },
    users: [
        {
            id: 1,
            username: "Potato",
            password: "PotatsRCul",
            email: "ILikePotatoes@gmail.com"
          },
    ]
}