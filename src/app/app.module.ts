import { FeaturedUsersService } from './../app/services/featured-users.service';
import { RecipesService } from './../app/services/recipes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; 
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LcHeaderComponent } from './lc-header/lc-header.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { FeaturedChefComponent } from './featured-chef/featured-chef.component';
import { FeaturedRecipeComponent } from './featured-recipe/featured-recipe.component';
import { LcFooterComponent } from './lc-footer/lc-footer.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { HomeComponent } from './home/home.component';
import { StepViewerComponent } from './step-viewer/step-viewer.component';
import { IngredientViewerComponent } from './ingredient-viewer/ingredient-viewer.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LcHeaderComponent,
    RecipeSearchComponent,
    FeaturedChefComponent,
    FeaturedRecipeComponent,
    LcFooterComponent,
    HomeComponent,
    CreateRecipeComponent,
    StepViewerComponent,
    IngredientViewerComponent,
    RecipePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },{ 
        path: 'create-recipe', 
        component: CreateRecipeComponent 
      }
    ])
  ],
  providers: [
    RecipesService,
    FeaturedUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
