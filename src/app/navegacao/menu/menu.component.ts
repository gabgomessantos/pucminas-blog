import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public isMenuCollapsed: boolean;

  constructor() {
    this.isMenuCollapsed = true;
  }

  ngOnInit(): void {
  }
}
