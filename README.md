# Cala Mobile

Cala Mobile is the mobile application with React Native for Android and IOS. The project is using ESlint with the Airbnb config combined with Prettier.

**Requirements:**

- Android Studio
- Xcode
- node >= 10
- watchman
- follow those steps [https://facebook.github.io/react-native/docs/getting-started](https://facebook.github.io/react-native/docs/getting-started)

## Case study

You will have to add the slot part of the Checkout page.
Those slots are available pickup for our customer, they have to chose it during the checkout.
You will have to reproduce the design from figma and store the selected slot to be able to use it in checkout submit

## Start project

Start Android:

```bash
npm run android
```

Start IOS:

```bash
npm run ios
```

## Design

[Figma](https://www.figma.com/file/F5JIBuGkuNkBvrvYdU8cmC/Software-case-study?node-id=0%3A1)

## Deployment

### Android

**Initialisation**

1. To open Keychain Access just press space+cmd and type keychain access.
2. Add a new password by pressing the plus sign
3. As name you can put android_keystore or whatever you find suitable. Fill in your account name in account. Ultimately you fill in the password that you used when you created the key using keytool\*.

**BETA**

```bash
npm run beta:android
```

### IOS

**Initialisation**

**BETA**

```bash
npm run beta:ios
```
