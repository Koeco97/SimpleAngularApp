import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {Page3Component} from "./page3/page3.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Page1Component, Page2Component, Page3Component, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'SimpleAngularApp';

  @ViewChild('footer', {static: true})
  footerComponent!: FooterComponent;

  @ViewChild('page2', {static: true})
  page2Component!: Page2Component

  startTime: string = '';

  currentPage = 1;

  updateLastAccessed(){
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  incrementHintCounter(page:number) {
    this.currentPage = page;
    if (page === 2) {
      this.page2Component.incrementHintCounter()
    }
  }
}
