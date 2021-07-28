import {iThread, iUser} from "../custom_types/object_types"

export interface IAppState {
    userState: IAppUserState;
    threadState: IAppThreadState;
}

export interface IAppThreadState {
    threads: iThread[];
}

export const initialThreadState: IAppThreadState = {
    threads: []
}

export interface IAppUserState {
    loggedIn: boolean;
    users: iUser[];
}

export const initialUserState: IAppUserState = {
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