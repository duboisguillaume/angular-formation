import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.css','../app.component.css']
})
export class HighlightCardComponent implements OnInit {
  @Input() title!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
