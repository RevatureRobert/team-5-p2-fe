import {iThread, iUser} from "../components/models"

export interface IAppState {
    userState: IAppUserState;
    threadState: IAppThreadState;
}

export interface IAppThreadState {
    threads: iThread[];
}

export const initialState: IAppThreadState = {
    threads: [
        {
            title: "Testing 1",
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

export interface IAppUserState {
    loggedIn: boolean;
    users: iUser[];
}

export const initState: IAppUserState = {
    loggedIn: false,
    users: [
        {
            id: 1,
            username: "Test User",
            password: "Test Password",
            email: "test@email.com",
            profile: "description of user",
          },
    ]
}