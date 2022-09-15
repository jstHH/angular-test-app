import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Testrezept', 'Dies ist ein Test', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'),
    new Recipe('Testrezept 2', 'Dies ist ein neuer Test', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg')];
  @Output() recipeClicked = new EventEmitter<Recipe>;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(selectedRecipe: Recipe) {
    this.recipeClicked.emit(selectedRecipe);
  }

}
