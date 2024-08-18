import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component implements OnInit, OnDestroy{

  subscription!: Subscription;


  constructor(private dataService: DataService) {
  }

  deleteLastBook(){
    this.dataService.deleteLastBook();
  }

  ngOnInit(): void {
    this.subscription = this.dataService.bookDeletedEvent.subscribe(
      (deletedBook) => {
        alert(`The book called ${deletedBook.title} was deleted`);
      },
      (error) => {
        alert(`No books were deleted - the error was ` + error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
