import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { recipe } from '../../recipes.module';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit { 
  @Input() recipe: recipe;
  @Output() recipeselected = new EventEmitter<void>();
  
constructor() { }

  ngOnInit() {
  }
onclicked() {
this.recipeselected.emit();  
}

}

