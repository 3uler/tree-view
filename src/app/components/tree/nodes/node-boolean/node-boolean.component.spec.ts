import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBooleanComponent } from './node-boolean.component';

describe('NodeBooleanComponent', () => {
  let component: NodeBooleanComponent;
  let fixture: ComponentFixture<NodeBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
