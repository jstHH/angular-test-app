import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  @Output() pageChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClick() {
    this.pageChanged.emit('recipes');
  }

  onSchoppingListClick() {
    this.pageChanged.emit('shopping');
  }
}
