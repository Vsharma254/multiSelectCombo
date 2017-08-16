import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public selectedArr: Array<any>;
  constructor() {
  }
  ngOnInit() {
    console.log('Hello About');
    this.selectedArr = new Array();
  }
  getSelectedItemFromDropDown(item: any) {
    this.selectedArr = item;
  }
}
