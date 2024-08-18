import {Component, Input} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input('lastAccessed')
  lastAccessed='';

  constructor(private dataService: DataService) {
  }

  addBook(){
    const book = new Book();
    book.title = 'another book'
    book.author = 'matt';
    this.dataService.addBook(book);
  }

  addBook2(){
    const book = new Book();
    book.title = 'another book'
    book.author = 'james';
    this.dataService.addBook(book);
  }
}
