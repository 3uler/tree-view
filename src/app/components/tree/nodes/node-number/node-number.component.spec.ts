import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeNumberComponent } from './node-number.component';

describe('NodeNumberComponent', () => {
  let component: NodeNumberComponent;
  let fixture: ComponentFixture<NodeNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
