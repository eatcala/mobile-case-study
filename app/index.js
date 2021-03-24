/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ThemeProvider } from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import jwt from 'react-native-pure-jwt';

import stripe from 'tipsi-stripe';

import { API_URL, STRIPE_PUBLIC_KEY } from '../env.json';

import { UserProvider } from './context';

import Rooting from './router/index';
import theme from '../src/styles';

stripe.setOptions({
  publishableKey: STRIPE_PUBLIC_KEY,
});

const httpLink = new HttpLink({ uri: API_URL });

const authLink = new ApolloLink(async (operation, forward) => {
  const authToken = await getToken();
  const phoneNumber = await AsyncStorage.getItem('phoneNumber');
  operation.setContext(({ headers }) => ({
    headers: {
      authorization: authToken ? `Bearer ${authToken}` : null,
      from: phoneNumber,
      ...headers,
    },
  }));
  return forward(operation);
});

const logoutUser = async () => {
  await AsyncStorage.clear();
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError && networkError.name === 'ServerError' && networkError.statusCode === 401) {
    // remove cached token on 401 from the server
  }
  if (graphQLErrors) {
    graphQLErrors.map(({ message, extensions: { code } }) => {
      if (code === 'UNAUTHENTICATED' || code === 'FORBIDDEN') {
        logoutUser();
      }
      return { message };
    });
  }
});

const link = from([authLink, errorLink, httpLink]);

const getToken = async () => {
  const secret = await AsyncStorage.getItem('secret');
  if (secret) {
    try {
      console.log('secret', secret);
      const token = await jwt.sign({ exp: new Date().getTime() + 3600 * 1 * 10000 }, secret, {
        alg: 'HS512',
      });
      console.log('token', token);
      return token;
    } catch (err) {
      console.log('err createToken', err);
      return {};
    }
  }
  return null;
};

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>          
        <UserProvider>
          <Rooting />
        </UserProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
