import { RecipePreviewComponent } from '../recipe-preview/recipe-preview.component';
import { IngredientViewerComponent } from '../ingredient-viewer/ingredient-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesService, Recipe, Ingredient, CookStep } from '../services/recipes.service'
import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';
import { NewRecipe } from '../new-recipe';

@Component({
  selector: 'create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  recipe: Recipe = new NewRecipe;

  private cookArray: CookStep[];

  
  constructor() {
  }

  updateIngArray(dayta) {
    this.recipe.ingredients = dayta;
  }

  createRecipe(newRecipe) {
    console.log(newRecipe.value);
  }

}
