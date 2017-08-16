import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from './games.component';
import { MultiSelectComboComponent } from '../multiselectcombo/multiselectcombo.component';
import { FilterComboListPipe } from '../multiselectcombo/multiselectcombo.pipe';
describe('Games Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [GamesComponent, MultiSelectComboComponent, FilterComboListPipe]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(GamesComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Below used Combo box plugin');
  });

});
