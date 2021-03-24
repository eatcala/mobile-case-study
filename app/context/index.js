import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { findInMenus, findDishIndex } from '../../src/utils/dishFinder';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const initialState = {
  bootSplashIsVisible: true,
  user: null,
  isUserNew: false,
  order: [],
  slot: null,
  card: null,
  cards: [],
  aliments: [],
  unavailableAliments: [],
  categories: [
    {
      id: 1,
      title: 'Choisis tes pâtes',
      TitleCategory: 'Pâtes',
    },
    {
      id: 2,
      title: 'Choisis ta sauce',
      TitleCategory: 'Sauces',
    },
    {
      id: 3,
      title: 'Choisis tes toppings',
      TitleCategory: 'Toppings',
    },
    {
      id: 4,
      title: 'Choisis tes toppings premium',
      TitleCategory: 'Toppings premium',
    },
    {
      id: 5,
      title: 'Choisis tes twists',
      TitleCategory: 'Twists',
    },
    {
      id: 6,
      title: 'Choisis ton dessert',
      TitleCategory: 'Desserts',
    },
    {
      id: 7,
      title: 'Choisis ta boisson',
      TitleCategory: 'Boissons',
    },
  ],
  error: null,
  menus: [],
  pastaCookings: [],
  selectedAllergies: [],
  selectedCategory: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'HIDE_BOOTSPLASH': {
      return { ...state, bootSplashIsVisible: action.payload };
    }
    case 'SET_USER': {
      return { ...state, user: action.payload };
    }
    case 'SET_USER_NEW': {
      return { ...state, isUserNew: action.payload };
    }
    case 'SET_ALIMENTS': {
      return { ...state, aliments: action.payload };
    }
    case 'SET_SLOT': {
      return { ...state, slot: action.payload };
    }
    case 'SET_DEFAULT_CARD': {
      return { ...state, card: action.payload };
    }
    case 'SET_CARDS': {
      return { ...state, cards: action.payload };
    }
    case 'SET_MENUS': {
      return { ...state, menus: action.payload };
    }
    case 'SET_PASTA_COOKINGS': {
      return { ...state, pastaCookings: action.payload };
    }
    case 'SET_UNAVAILABLE_ALIMENTS': {
      return { ...state, unavailableAliments: action.payload };
    }
    case 'REMOVE_DISH_FROM_ORDER': {
      const { uuid } = action.payload;
      const order = [...state.order];
      const updatedOrder = order.filter(dish => dish.uuid !== uuid);
      return { ...state, order: updatedOrder };
    }
    case 'CLONE_DISH_INTO_ORDER': {
      const clonedDish = { ...action.payload };
      clonedDish.uuid = Date.now();
      return { ...state, order: [...state.order, clonedDish] };
    }
    case 'UPDATE_ORDER': {
      const order = [...state.order];
      const updatingDish = { ...action.payload.dish };

      const foundDishIndex = findDishIndex(order, action.payload.index, updatingDish);
      if (foundDishIndex !== null) {
        order[foundDishIndex].quantity =
          parseInt(order[foundDishIndex].quantity, 10) + parseInt(action.payload.quantity, 10);
        order.splice(action.payload.index, 1);
      } else {
        order[action.payload.index].dish = updatingDish;
      }

      return { ...state, order };
    }
    case 'ADD_DISH_TO_ORDER': {
      const order = [...state.order];
      const newDish = { ...action.payload };

      // Uniquely tag dish
      if (!('uuid' in newDish)) {
        newDish.uuid = Date.now();
      }
      // Remove GraphQL's __typename to be able to compare MenuAliments
      // with JSON.stringify, because non-default 'aliments' don't have __typename in them.
      // TODO: Investigate setting addTypename: false on AppoloClient init.
      newDish.aliments = newDish.aliments.map(aliment => {
        const { __typename, ...rest } = aliment;
        return rest;
      });

      const foundDish = order.find(dish => dish.uuid === newDish.uuid);
      const foundInMenus = findInMenus([...state.menus], newDish);

      if (!foundDish) {
        order.push({
          ...newDish,
          custom: !foundInMenus,
        });
      }
      return { ...state, order };
    }
    case 'ADD_DISH_STACK_TO_ORDER': {
      const { dishStack, selectedMenu } = action.payload;

      let order = [...state.order];
      order = order.filter(menu => {
        return !dishStack.some(({ uuid }) => menu.uuid === uuid);
      });

      const newDishStack = dishStack.map(dish => {
        return {
          ...dish,
          aliments: [...selectedMenu.aliments],
        };
      });

      return {
        ...state,
        order: [...order, ...newDishStack],
      };
    }
    case 'SET_SELECTED_ALLERGIES': {
      return { ...state, selectedAllergies: action.payload };
    }
    case 'SET_SELECTED_CATEGORY': {
      const final = state.categories
        .map(item => parseInt(item.id, 10))
        .indexOf(parseInt(action.payload.final, 10));
      const current = state.categories
        .map(item => parseInt(item.id, 10))
        .indexOf(parseInt(action.payload.current, 10));
      const selectedCategory = {
        final: final === -1 ? state.selectedCategory.final : final,
        current: current === -1 ? state.selectedCategory.current : current,
        scroll: action.payload.scroll,
      };
      return { ...state, selectedCategory };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, useUserState, useUserDispatch };
