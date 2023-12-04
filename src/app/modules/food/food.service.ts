import { Food } from './food.interface';
import { FoodModel } from './food.model';

// post
const createFoodInfoDb = async (food: Food) => {
  const result = await FoodModel.create(food);
  return result;
};

export const foodServices = {
  createFoodInfoDb,
};
