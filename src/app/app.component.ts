import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POC-Entrinsic';
  cards;
 
  constructor(private service: CardService) { }

  ngOnInit(): void {

    this.service.getAll().subscribe(cards => this.cards = cards);
  }

}
