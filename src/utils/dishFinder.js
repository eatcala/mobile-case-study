const sortAliments = aliments => {
  return aliments
    .sort((first, second) => {
      return first.id < second.id;
    })
    .map(({ id }) => id);
};

export const findInMenus = (menus, newDish) => {
  return menus.find(menu => {
    const menuAliments = sortAliments([...menu.aliments]);
    const dishAliments = sortAliments([...newDish.aliments]);
    try {
      return JSON.stringify(menuAliments) === JSON.stringify(dishAliments);
    } catch (err) {
      console.log('FIND_IN_MENUS err', err);
      return false;
    }
  });
};

export const updateMenuWithoutUnavailableAliments = (menu, alimentContainers) => {
  const { aliments: menuAliments } = menu;
  const menuWithoutUnavailableAliments = [];
  const unavailableAliments = [];
  menuAliments.forEach(menuAliment => {
    const foundAlimentContainer = alimentContainers.find(({ aliment }) => {
      return menuAliment.id === aliment.id;
    });
    if (foundAlimentContainer && parseInt(foundAlimentContainer.quantity, 10) > 0) {
      menuWithoutUnavailableAliments.push(menuAliment);
    } else if (foundAlimentContainer) {
      unavailableAliments.push(foundAlimentContainer.aliment);
    }
  });
  return { menuWithoutUnavailableAliments, unavailableAliments };
};

const areDishesEqual = (orderDish, updatingDish) => {
  const orderDishAliments = sortAliments([...orderDish.menuAliments]);
  const updatingDishAliments = sortAliments([...updatingDish.menuAliments]);
  try {
    return JSON.stringify(orderDishAliments) === JSON.stringify(updatingDishAliments);
  } catch (err) {
    console.log('ARE_DISHES_EQUAL err', err);
    return false;
  }
};

export const findDishIndex = (order, menuIndex, updatingDish) => {
  let foundDishIndex = null;
  order.find((dish, index) => {
    if (index !== menuIndex && areDishesEqual(dish.dish, updatingDish)) {
      foundDishIndex = index;
      return true;
    }
    return false;
  });
  return foundDishIndex;
};

export const getOrderGroupedByMenus = order => {
  const orderGroupedByMenus = order || [];
  return orderGroupedByMenus.reduce((accumulator, currentDish) => {
    const found = accumulator.find(category => {
      return JSON.stringify(category[0].aliments) === JSON.stringify(currentDish.aliments);
    });
    found ? found.push(currentDish) : accumulator.push([currentDish]);
    return accumulator;
  }, []);
};
