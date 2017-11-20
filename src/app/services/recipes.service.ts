import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {
  
  private baseUrl: string = 'http://localhost:3000/recipes';
  constructor(private http : Http) {
  }

  getFeaturedRecipes() {
    return this.http.get(this.baseUrl)
    .map((res:Response) => res.json());
  }
}

export interface Recipe {
  id: number,
  author_id: number,
  recipeName: string,
  author: string,
  description: string,
  created_at: string,
  updated_at?: string,
  mainImage?: URL,
  rating?: number,
  prepStep: string,
  ingredients?: Ingredient[],
  cookSteps?: CookStep[]
}

export interface CookStep {
  id: number,
  instruction: string,
  timer?: boolean,
  time?: string
}

export interface Ingredient {
  id: number,
  amount: string,
  ingName: string,
  image?: URL
}
