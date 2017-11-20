import { IngredientViewerComponent } from '../ingredient-viewer/ingredient-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesService, Recipe, Ingredient, CookStep } from '../services/recipes.service'
import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';


@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.css']
})
export class RecipePreviewComponent implements OnInit {
  @Input() recipePreview: object;
  @Input('newRecipe') RecipePreview: object;

  constructor() { }

  ngOnInit() {
  }

}
