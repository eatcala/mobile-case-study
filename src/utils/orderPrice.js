export const getDishPrice = dishAliments => {
  let dishPrice = 6.0;

  dishAliments.forEach(aliment => {
    const extraCost = aliment.price ? parseFloat(aliment.price.replace(',', '.'), 10) : 0.0;
    dishPrice += extraCost;
  });

  if (Math.round(dishPrice) !== dishPrice) {
    return dishPrice.toFixed(2);
  }

  return dishPrice;
};

export const getOrderPrice = (order, discount = 0) => {
  let orderPrice = 0 - discount;

  order.forEach(dish => {
    orderPrice += getDishPrice(dish.aliments);
  });

  if (Math.round(orderPrice) !== orderPrice) {
    return orderPrice.toFixed(2);
  }

  return orderPrice;
};
