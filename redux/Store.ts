import {iThread, iUser} from "../custom_types/object_types"

export interface IAppState {
    userState: IAppUserState;
    threadState: IAppThreadState;
}

export interface IAppThreadState {
    threads: iThread[];
}

export const initialThreadState: IAppThreadState = {
    threads: [{
        id: 1,
        title: 'title',
        description: 'description',
        author: 'author',
    }]
}

export interface IAppUserState {
    loggedIn: boolean;
    currentUser: iUser;    
    users: iUser[];
}

export const initialUserState: IAppUserState = {
    loggedIn: false,
    currentUser: {
        id: 0,
        username: "",
        password: "",
        email: "",
        profile: "",
    },
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