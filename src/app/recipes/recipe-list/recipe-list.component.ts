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
    'https://e7.pngegg.com/pngimages/188/226/png-clipart-veganism-plant-based-diet-lifestyle-travel-logo-vegan-recipe-logo.png'),
    
    new Recipe('My new Recipe', 'delicious meal', 'https://c8.alamy.com/comp/KM1R4E/original-recipe-grunge-rubber-stamp-on-white-background-vector-illustration-KM1R4E.jpg')
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
