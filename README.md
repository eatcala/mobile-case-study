# Cala Mobile case study

This repository is a limited access to Cala Mobile, our mobile app built with [React Native](https://reactnative.dev/docs/getting-started). Code is linted using [ESlint](https://github.com/eslint/eslint) with the [Airbnb](https://github.com/airbnb/javascript) ruleset and [Prettier](https://github.com/prettier/prettier). We don't use Redux or any other state management library but [React hooks](https://reactjs.org/docs/hooks-overview.html) and [Apollo](https://www.apollographql.com/docs/react/) state with [React Navigation](https://reactnavigation.org/docs/getting-started) for the routing.

**Requirements:**

- Android Studio
- Xcode
- node >= 10
- watchman
- follow those steps [https://facebook.github.io/react-native/docs/getting-started](https://facebook.github.io/react-native/docs/getting-started)

## Case study

You will have to add a pickup slot picker to the Checkout screen. You can find the design in our [Figma](https://www.figma.com/file/F5JIBuGkuNkBvrvYdU8cmC/Software-case-study?node-id=0%3A1) workspace.

Tasks are as follows:

- Create a component to display a sticky modal using **react-native-modal**.
- Fetch the available pickup slots using **Apollo** and **graphQL** tags.
- Create an object containing slots in order to display them by hour in a list.
- Implement the design found in Figma using **styled-component**.
- Store the selected slot so as to use it at checkout.

Feel free to ask about anything 😉

## Start project

Start Android:

```bash
npm run android
```

Start IOS:

```bash
npm run ios
```
