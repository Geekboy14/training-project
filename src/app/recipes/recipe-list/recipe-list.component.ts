import { recipe } from './../recipes.module';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasclicked = new EventEmitter<recipe>();

  recipes: recipe[] = [
    new recipe('A test recipe', 'this simply a test',
      'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps23008_FM153592B03_10_4b.jpg'),
    new recipe('A test recipe', 'this simply a test',
      'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps23008_FM153592B03_10_4b.jpg')
  ];

  constructor() { }
  ngOnInit() {
  }
  onRecipeClicked(recipe: recipe) {
    this.recipeWasclicked.emit(recipe);

  }
}
