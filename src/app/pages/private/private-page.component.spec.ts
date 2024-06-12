import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivatePageComponent } from './private-page.component';

describe('ProtectedPageComponent', () => {
  let component: PrivatePageComponent;
  let fixture: ComponentFixture<PrivatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
