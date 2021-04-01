# Cala Mobile case study

This repository is a limited access to Cala Mobile, our mobile app built with React Native. Code is linted using ESlint with the Airbnb ruleset and Prettier. We don't use Redux or any other state management library but React hooks and Apollo state with React Navigation for the routing.

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
