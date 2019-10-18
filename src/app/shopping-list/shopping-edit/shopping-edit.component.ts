import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) name: ElementRef;
  @ViewChild('amountInput', {static: true}) amount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.shoppingListService.addToShoppingList(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
