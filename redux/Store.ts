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
            post: "This is a test to see if this will work",
            id: 0,
          },
          {
            title: "Hey",
            author: "Tyler",
            description: "This is also a test",
            post: "Trying to get this all to work",
            id: 1,
          },]
}

export interface IEditUserState {
    currentUser: number;
    edit: boolean;
}

export interface IAppUserState {
    editUserState: IEditUserState;
    users: iUser[];
}

export const initState: IAppUserState = {
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