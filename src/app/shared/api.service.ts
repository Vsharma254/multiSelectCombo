import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ApiService {
  public title: String = 'Angular 2';
  public _items: Array<any>;
  constructor() {
  }
  getGamesList(): Observable<any>  {
    this._items = new Array();
    this._items = new Array();
    this._items.push({ label: 'Cricket', Id: 1 });
    this._items.push({ label: 'Football', Id: 2 });
    this._items.push({ label: 'Chess', Id: 3 });
    this._items.push({ label: 'Kabbadi', Id: 4 });
    this._items.push({ label: 'Tenis', Id: 5 });
    this._items.push({ label: 'Table tenis', Id: 6 });
    return Observable.of(this._items);
  }
}
