import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Rest Recipe', 'This is simply a test', 'https://pixabay.com/de/photos/gem%C3%BCse-topf-kochen-zutaten-1006694/')
  ];

  constructor() { }

  ngOnInit() {
    
  }
}
