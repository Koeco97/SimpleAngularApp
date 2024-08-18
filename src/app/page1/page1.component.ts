import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit, OnDestroy{

  pageName = 'Page 1';
  books: Array<Book> = new Array<Book>();
  numberOfBooksWrittenByMatt: number = 0;

  subscription!: Subscription;
  subscription2!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    setTimeout( () => { this.pageName = 'First page'}, 5000);
    this.books = this.dataService.books;
    this.numberOfBooksWrittenByMatt = this.books.filter(it => it.author === 'matt').length;

    this.subscription = this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        if (newBook.author === 'matt') {
          this.numberOfBooksWrittenByMatt++;
        }
      },
      (error) => {
        console.log('an error occurred', error)
      },
      () => {
        // complete event
      }
    );

    this.subscription2 = this.dataService.bookDeletedEvent.subscribe(
      (deletedBook) => {
        if (deletedBook.author === 'matt') {
          this.numberOfBooksWrittenByMatt--;
        }
      }
    );

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription2?.unsubscribe();
  }

  onButtonClick(){
    alert('hello - the date today is' + new Date());
  }

}
