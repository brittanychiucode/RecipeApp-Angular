// Angular Imports
import { Component, OnInit } from '@angular/core';

// Model Imports
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // Properties
  recipes: Recipe[] = [
    new Recipe("Fried Chicken", "i am chicken", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
