import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholicTagComponent } from './alcoholic-tag.component';

describe('AlcoholicTagComponent', () => {
  let component: AlcoholicTagComponent;
  let fixture: ComponentFixture<AlcoholicTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlcoholicTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlcoholicTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
