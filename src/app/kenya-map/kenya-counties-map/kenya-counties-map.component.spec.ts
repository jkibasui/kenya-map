import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KenyaCountiesMapComponent } from './kenya-counties-map.component';

describe('KenyaCountiesMapComponent', () => {
  let component: KenyaCountiesMapComponent;
  let fixture: ComponentFixture<KenyaCountiesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenyaCountiesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KenyaCountiesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
