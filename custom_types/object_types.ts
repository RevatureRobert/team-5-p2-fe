export interface iThread {
    id: number;
    title: string;
    author: string;
    description: string;
    likes: number;
    dislikes: number;
}

export interface iUser {
    id: number;
    username: string;
    password: string;
    email: string;
    profile: string;
}