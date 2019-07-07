import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeObjectComponent } from './node-object.component';

describe('NodeObjectComponent', () => {
  let component: NodeObjectComponent;
  let fixture: ComponentFixture<NodeObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
