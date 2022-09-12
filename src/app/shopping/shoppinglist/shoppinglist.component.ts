import {Component} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})

export class ShoppinglistComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Potatoes', 5)];

}
