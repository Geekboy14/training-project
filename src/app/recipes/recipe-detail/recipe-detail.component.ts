import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../recipes.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe: recipe;

  constructor() { }

  ngOnInit() {
  }

}
