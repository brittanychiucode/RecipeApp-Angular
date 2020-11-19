// Angular 
import { Component, OnInit } from '@angular/core';

// Models
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // Properties
  ingredients: Ingredient[] = [
    new Ingredient("Olive Oil", 1),
    new Ingredient("Chicken Breasts", 7)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
