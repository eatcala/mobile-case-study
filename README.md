# Cala Mobile case study

Cala Mobile is the mobile application with React Native for Android and IOS. The project is using ESlint with the Airbnb config combined with Prettier. We don't use redux or state manager but React hooks and Apollo state with React Navigation for the routing.

**Requirements:**

- Android Studio
- Xcode
- node >= 10
- watchman
- follow those steps [https://facebook.github.io/react-native/docs/getting-started](https://facebook.github.io/react-native/docs/getting-started)

## Case study

You will have to add the slot part of the Checkout page. You can find the design in our Figma account [Figma](https://www.figma.com/file/F5JIBuGkuNkBvrvYdU8cmC/Software-case-study?node-id=0%3A1)

The goal of the sudy case is to:
- Create a component to display a sticky modal using **react-native-modal**
- Fetch the availables slots for pickup using **apollo** and **graphQL** tags
- Fulfill a new slots object parsing the query result to be able to use it in list
- Reproduce the design found in Figma using **styled-component**
- Store the selected slot to be able to use it in checkout submit

Feel free to 

## Start project

Start Android:

```bash
npm run android
```

Start IOS:

```bash
npm run ios
```
