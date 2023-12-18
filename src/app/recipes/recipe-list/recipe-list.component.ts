import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
    
  }
}
