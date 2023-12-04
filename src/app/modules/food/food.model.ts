import { Schema, model } from 'mongoose';
import { Food } from './food.interface';

// food schema
const foodSchema = new Schema<Food>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

// model for food
export const FoodModel = model<Food>('Food', foodSchema);
