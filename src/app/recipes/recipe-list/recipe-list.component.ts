import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] =[
    new Recipe('A Test Recipe', 'this is a test',
    'https://get.pxhere.com/photo/food-ingredient-cuisine-produce-meal-whole-food-dish-vegetable-vegan-nutrition-natural-foods-leaf-vegetable-recipe-bowl-local-food-Food-group-cookware-and-bakeware-lunch-breakfast-superfood-cooking-fast-food-spoon-cruciferous-vegetables-still-life-photography-meat-kitchen-utensil-egg-yolk-fruit-stew-vegetarian-food-side-dish-egg-white-accessory-fruit-menemen-delicacy-sundubu-jjigae-nightshade-family-frying-pan-root-vegetable-staple-food-bush-tomato-1636750.jpg')
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
