import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeStringComponent } from './node-string.component';

describe('NodeStringComponent', () => {
  let component: NodeStringComponent;
  let fixture: ComponentFixture<NodeStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
