import { Food } from "../../../models/food.model";

export interface State {
  foods: Food[];
}

export const initialState: State = {
  foods: [],
};
