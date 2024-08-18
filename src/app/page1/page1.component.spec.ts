import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page1.component';
import {Book} from "../model/Book";
import {DataService} from "../data.service";

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('number of books written by matt is incremented correctly', () => {
    const startValue = component.numberOfBooksWrittenByMatt;
    const book = new Book();
    book.author = 'matt';
    const dataService = fixture.debugElement.injector.get(DataService);
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
  })

  it('number of books written by matt is incremented correctly version 2', () => {
    const startValue = component.numberOfBooksWrittenByMatt;
    const book = new Book();
    book.author = 'matt';
    const dataService = new DataService();
    component = new Page1Component(dataService);
    component.ngOnInit();
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
  })


});
