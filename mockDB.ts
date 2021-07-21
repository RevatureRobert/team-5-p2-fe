import * as models from './components/models'

export const threads: models.iThread[] = [
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
    }];

export const mock_user:models.iUser = {
    id: 1,
    username: 'username_mock',
    password: 'password_mock',
    email: 'mock@mockemail.com'
}