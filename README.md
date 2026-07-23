# React Native

- React Native is a framework made by Meta (Facebook). It lets you write mobile apps using JavaScript and React.
- You write code once, and it translates your code into a real, native Android app and iOS (Apple) app at the same time.
- On its own, it requires a lot of setup, configurations, and knowledge of Android Studio and Xcode.

## Expo Frame

- Expo is a set of tools built on top of React Native to make your life incredibly easy.
- It handles all the complex setup behind the scenes.
- It gives you the Expo Go app, allowing you to scan a QR code with your phone camera and see your app run instantly. You do not even need a Mac to make an iPhone app when using Expo.

# Instructions

### install expo framework

1. npx create-expo-app@latest
2. install expo go app in mobile
3. npx expo start
4. app->tabs->index
5. Added style sheets
6. Added new images
7. added ImageBackground component from react-native and added image source
8. made changes in app.json file where changed icon and splash
9. Moved the index and explore page from the tabs folder to app folder (Moving the pages simplified the route structure.)
10. Renamed \_layout to x_layout disables its special layout behavior
11. Added link navigation in index file
12. Expo Router works similarly to Next.js App Router because both use file-based routing.
13. To change the headers of the screen we have to do it in apps/\_layout page
14. (tabs) -> for tabs down the app
15. icons -> https://icons.expo.fyi
16. themes change in tabs

#### Tricks

1. select the text-> ctrl+D -> ctrl+D the cursor will move to the same text and we can rename at all once
2. copy the text-> shift+alt+downarrow -> It will paste down
