import { Component } from "@angular/core";

import { Food } from "../models/food.model";
import { FoodService } from "./food.service";
import { Observable } from "rxjs/index";

@Component({
  selector: "app-food-box",
  templateUrl: "./food.component.html",
})
export class FoodComponent {
  selectedFood: Food;
  constructor(private foodService: FoodService) {}

  getFoods(): Observable<Food[]> {
    return this.foodService.foods$;
  }

  onFoodCreate(foodName: HTMLInputElement, foodDescription: HTMLInputElement) {
    if (!foodName.value) {
      return;
    }
    if (!foodDescription.value) {
      return;
    }

    this.foodService.createFood(foodName.value, foodDescription.value);

    foodName.value = null;
    foodDescription.value = null;
  }

  onFoodRemove(food: Food) {
    this.foodService.removeFood(food);
  }

  onFoodUpdate(
    food: Food,
    foodName: HTMLInputElement,
    foodDescription: HTMLInputElement
  ) {
    food.description = foodDescription.value;
    food.name = foodName.value;
    this.foodService.updateFood(food);
    this.selectedFood = null;
    this.getvalue();
  }

  onclick(food) {
    this.selectedFood = food;
    this.getvalue(food);
  }

  getvalue(food?) {
    const foodName = document.getElementById("foodName") as HTMLInputElement;
    if (foodName) foodName.value = food ? food.name : null;

    const foodDescription = document.getElementById(
      "foodDescription"
    ) as HTMLInputElement;
    if (foodDescription) foodDescription.value = food ? food.description : null;
  }
}
