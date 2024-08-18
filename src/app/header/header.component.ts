import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  pageRequested: number = 1

  @Output()
  pageChangedEvent = new EventEmitter<number>();

  onPageChange(page:number){
    this.pageRequested=page;
    console.log(this.pageRequested)
    this.pageChangedEvent.emit(page);
  }

}
