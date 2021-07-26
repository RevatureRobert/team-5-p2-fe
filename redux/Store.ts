import {iThread, iUser} from "../components/models"

export interface IAppState {
    userState: IAppUserState;
    threadState: IAppThreadState;
}

export interface IAppThreadState {
    threads: iThread[];
}

export const initialState: IAppThreadState = {
    threads: []
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