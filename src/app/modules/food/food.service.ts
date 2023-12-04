import { Food } from './food.interface';
import { FoodModel } from './food.model';

// post
const createFoodInfoDb = async (food: Food) => {
  const result = await FoodModel.create(food);
  return result;
};

// get
const getAllFoodsFromDb = async () => {
  const result = await FoodModel.find();
  return result;
};

export const FoodServices = {
  createFoodInfoDb,
  getAllFoodsFromDb,
};
