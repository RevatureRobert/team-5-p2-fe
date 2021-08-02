Project Description
---
   
*  The Front end of Sylph, A social media application to reflect a forum-style format that allows 
    users to see, post, and comment on other posts of a variety of ideas and topics created by 
    themselves or others. The application can be run as a mobile app (iOS or Android) or as a 
    web application.

*  This project is written in React Native intialized with Expo, written with unit tests 
    using Jest and Enzyme.

Technologies Used
--- 
*  React Native in Typescript
*  React Redux
*  Expo
*  Jest (with Enzyme)
*  AWS Amplify
*  AWS APIGateway
*  AWS Cognito

Features
---
    
-   Users can signup and validate their own emails
-   Users can login
-   Users can logout of the application when finished
-   Users can post new threads
-   Users can view all existing threads
-   Users can like threads
-   Users can set their profile
    -   To-Do List:    
        -   Adding Images to threads
        -   Create a loading page
        -   Obtain other users profile

Getting Started
---
-   To Run:
    - There is currently no way to run this app on iOS for those not on the development team
    - On Android, there are two ways to get our app
        - Download the `Expo` app from the Play Store and do ONE of the following
            - Go to [here](https://expo.io/@jkula19/team5-p2-fe ) on another device and scan the QR code
            - Paste `exp://exp.host/@jkula19/team5-p2-fe` into the Tools Category
        - Sideload an APK
            - Using an [APK](https://expo.io/artifacts/05fd30f5-2e54-4a2d-970e-56710b222db1)
            - Download and install Android Studio
            - Create a blank project or open and existing one
            - Open the AVD (Android Virtual Device) Manager using the icon at the top right or selecting it from the `Tools` menu
    
-   To Develop:
    
    -   Install NodeJS
    -   git clone [the repository](https://github.com/RevatureRobert/team-5-p2-fe.git)
    -   Enter the repository on your terminal
    -   Run `yarn` to install all of the dependencies that you will need.
    -   Run `expo start` to run the app in development mode.
    
-   To Deploy:
    -   `expo build:android`

Usage
---
-  View threads from logged in users on the home screen
-  Create a new user. Login using new username and password after verifying your email.
-  Post a new thread by using the + icon at the top of the navbar.
-  View your Profile page by locating the profile icon
-  Edit your Profile page by using the "Edit Profile" button
-  Logout of your account after you are done using it

Contributors
---
-  Jacob Kula
-  Matthew Otto
-  Tyler Yates