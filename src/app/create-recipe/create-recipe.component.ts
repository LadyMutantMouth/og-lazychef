import { RecipePreviewComponent } from '../recipe-preview/recipe-preview.component';
import { IngredientViewerComponent } from '../ingredient-viewer/ingredient-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesService, Recipe, Ingredient, CookStep } from '../services/recipes.service'
import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';

@Component({
  selector: 'create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  @Input() private ingArray: any[] = [];
  
  //private recipe: Recipe;

  private cookArray: CookStep[];

  
  constructor() {
   let newRecipe: Recipe;
   }
  

  createRecipe(newRecipe) {
    console.log(newRecipe.value);
    //this.readyIngredientArray.emit(this.ingArray);
    console.log(this.ingArray);

  }

}
