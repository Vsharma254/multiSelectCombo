import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MultiSelectComboComponent } from './multiselectcombo.component';
import { ApiService } from '../shared/api.service';
import { FilterComboListPipe } from '../multiselectcombo/multiselectcombo.pipe';
import { Observable } from 'rxjs';

describe('Multi Select Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [MultiSelectComboComponent, FilterComboListPipe],
      providers: [ApiService]
    });
  });

  it('should render proper', () => {
    const fixture = TestBed.createComponent(MultiSelectComboComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Multiple Select Combo!');
  });
  it('should list get filled', () => {
    const fixture = TestBed.createComponent(MultiSelectComboComponent);
    fixture.detectChanges();
    let comp = fixture.componentInstance;
    let servInstance = fixture.debugElement.injector.get(ApiService);
    const arrList = new Array();
    arrList.push({ label: 'Cricket', Id: 1 });
    arrList.push({ label: 'Football', Id: 2 });
    arrList.push({ label: 'Chess', Id: 3 });
    arrList.push({ label: 'Kabbadi', Id: 4 });
    arrList.push({ label: 'Tenis', Id: 5 });
    arrList.push({ label: 'Table tenis', Id: 6 });
    spyOn(servInstance, 'getGamesList').and.returnValue(  Observable.of(arrList));
    comp.ngOnInit();
    expect(comp._items.length).toEqual(6);
  });

   it('Item Added in selected container', () => {
    const fixture = TestBed.createComponent(MultiSelectComboComponent);
    fixture.detectChanges();
    let comp = fixture.componentInstance;
    let servInstance = fixture.debugElement.injector.get(ApiService);
    const arrList = new Array();
    arrList.push({ label: 'Cricket', Id: 1 });
    arrList.push({ label: 'Football', Id: 2 });
    arrList.push({ label: 'Chess', Id: 3 });
    arrList.push({ label: 'Kabbadi', Id: 4 });
    arrList.push({ label: 'Tenis', Id: 5 });
    arrList.push({ label: 'Table tenis', Id: 6 });
    spyOn(servInstance, 'getGamesList').and.returnValue(Observable.of(arrList));
    comp.ngOnInit();
    expect(comp._items.length).toEqual(6);
    comp.select({ label: 'Cricket', Id: 1 });
    expect(comp._selectedItems.length).toEqual(1);
  });
});
