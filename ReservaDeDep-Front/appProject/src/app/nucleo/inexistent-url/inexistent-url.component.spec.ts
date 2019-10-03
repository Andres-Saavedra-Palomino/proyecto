import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InexistentUrlComponent } from './inexistent-url.component';

describe('InexistentUrlComponent', () => {
  let component: InexistentUrlComponent;
  let fixture: ComponentFixture<InexistentUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InexistentUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InexistentUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
