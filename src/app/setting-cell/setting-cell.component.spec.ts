import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingCellComponent } from './setting-cell.component';

describe('SettingCellComponent', () => {
  let component: SettingCellComponent;
  let fixture: ComponentFixture<SettingCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
