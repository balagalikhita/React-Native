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
14. (tabs) -> for tabs down the app -> created (coffee)
15. icons -> https://icons.expo.fyi
16. themes change in tabs
17. Appearance :The Appearance module exposes information about the user's appearance preferences, such as their preferred system color scheme (light or dark).
18. List Views

- React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either FlatList or SectionList.

### The FlatList

- The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data, where the number of items might change over time. Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once.

- The FlatList component requires two props: data and renderItem. data is the source of information for the list. renderItem takes one item from the source and returns a formatted component to render.

- This example creates a basic FlatList of hardcoded data. Each item in the data props is rendered as a Text component. The FlatListBasics component then renders the FlatList and all Text components.
  Ex: normal list

### SectionList

If you want to render a set of data broken into logical sections, maybe with section headers, similar to UITableView on iOS, then a SectionList is the way to go.
Ex: contact list

19. SafeAreaView

- SafeAreaView renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13).

20. Implemented contact us page

#### Tricks

1. select the text-> ctrl+D -> ctrl+D the cursor will move to the same text and we can rename at all once
2. copy the text-> shift+alt+downarrow -> It will paste down
