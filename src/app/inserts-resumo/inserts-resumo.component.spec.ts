import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertsResumoComponent } from './inserts-resumo.component';

describe('InsertsResumoComponent', () => {
  let component: InsertsResumoComponent;
  let fixture: ComponentFixture<InsertsResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertsResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertsResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
