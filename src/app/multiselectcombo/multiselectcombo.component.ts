import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../shared';
@Component({
  selector: 'my-multiselect-combo',
  templateUrl: './multiselectcombo.component.html',
  styleUrls: ['./multiselectcombo.component.scss'],
  providers: [ ApiService ]
})
export class MultiSelectComboComponent implements OnInit {
  public _items: Array<any>;
  public _selectedItems: Array<any>;
  public isOpen: Boolean = false;
  public enableFilter: Boolean;
  public header: String = 'Pick a game';
  public filterText: string;
  public filterPlaceholder: string;
  public filteredValue: String;
  public fg: FormGroup;
  @Input() items: Observable<any[]>;
  @Output() getSelectedItem:  EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  constructor(private _serv: ApiService) {
    // Do stuff
  }
  ngOnInit() {
    this.enableFilter = true;
    this.fg = new FormGroup(
      {
        filterText: new FormControl()
      });
    this._selectedItems = new Array();
    this._serv.getGamesList().subscribe(res => {
        this._items = res;
      });
  }
  toggleSelect() {
    this.isOpen = !this.isOpen;
  }
  select(item: any): void {
    item.checked = !item.checked;
    this.addIteminDropdown(item);
    this.getSelectedItem.emit(this._selectedItems);
  }
  addIteminDropdown(selectedItem: any) {
    if (selectedItem.checked) {
      this._selectedItems.push(selectedItem);
    } else {
      this._selectedItems = this._selectedItems.filter((item) => {
        return item.Id !== selectedItem.Id ? true : false;
      });
    }
  }
}
