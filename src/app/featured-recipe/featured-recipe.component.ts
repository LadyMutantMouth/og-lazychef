import { RecipesService } from './../services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-recipe',
  templateUrl: './featured-recipe.component.html',
  styleUrls: ['./featured-recipe.component.css']
})
export class FeaturedRecipeComponent implements OnInit {

  constructor(private recipesService: RecipesService) {}
  featuredRecipes = [];

  getFeaturedRecipes() {
    this.recipesService.getFeaturedRecipes()
      .subscribe(
        data => this.featuredRecipes = data,
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.getFeaturedRecipes();
  }
  


}
