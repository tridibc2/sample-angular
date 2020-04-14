import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogByCategoryComponent } from './blog-by-category.component';

describe('BlogByCategoryComponent', () => {
  let component: BlogByCategoryComponent;
  let fixture: ComponentFixture<BlogByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
