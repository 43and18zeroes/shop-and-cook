import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {

  constructor(private slService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.ingName, value.ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
