import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService, Recipe, Ingredient, CookStep } from './../services/recipes.service';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'ingredient-viewer',
  templateUrl: './ingredient-viewer.component.html',
  styleUrls: ['./ingredient-viewer.component.css']
})
export class IngredientViewerComponent {

  @Input() private ingArray: Ingredient[] = [];

  constructor() {
    let newIng: Ingredient;
    let ingredientArray: any[];
   }

  addMore(newIng: NgForm) {
    this.ingArray.push(newIng.value);
    newIng.reset();
    console.log(this.ingArray);
  }

  removeIngredient(ingredient, index) {
    this.ingArray.splice(this.ingArray.indexOf(index, 1));
  }

 
}
