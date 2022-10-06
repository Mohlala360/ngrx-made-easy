import { Action } from "@ngrx/store";
import { Food } from "../../../models/food.model";

export const enum FoodActionTypes {
  CREATE_FOOD = "[Food] Create",
  CREATE_FOOD_SUCCESS = "[Food] Create success",
  REMOVE_FOOD = "[Food] Remove",
  UPDATE_FOOD = "[Food] Update",
  UPDATE_FOOD_SUCCESS = "[Food] Update success",
}

export class CreateFood implements Action {
  readonly type: string = FoodActionTypes.CREATE_FOOD;
  constructor(public payload: Food) {}
}

export class CreateFoodSuccess implements Action {
  readonly type: string = FoodActionTypes.CREATE_FOOD_SUCCESS;
  constructor(public payload: Food) {}
}

export class RemoveFood implements Action {
  readonly type: string = FoodActionTypes.REMOVE_FOOD;
  constructor(public payload: number) {}
}

export class UpdateFood implements Action {
  readonly type: string = FoodActionTypes.UPDATE_FOOD;
  constructor(public payload: Food) {}
}

export class UpdateFoodSuccess implements Action {
  readonly type: string = FoodActionTypes.UPDATE_FOOD_SUCCESS;
  constructor(public payload: Food) {}
}

export type FoodAction =
  | CreateFood
  | CreateFoodSuccess
  | RemoveFood
  | UpdateFood;
