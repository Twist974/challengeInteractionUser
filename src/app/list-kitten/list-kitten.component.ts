import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../common/kitten';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component'

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  public kittensList: Kitten[] = [
    {
      name: 'bob',
      race: 'whitecat',
      birthday: '01/04/2021',
      pic: 'http://placekitten.com/200/200',
    },
    {
      name: 'bobby',
      race: 'darkcat',
      birthday: '01/04/2021',
      pic: 'http://placekitten.com/200/200',
    },
  ];

  @Input() newKitten: Kitten;

  constructor() {}

  ngOnInit(): void {}

  receiveKitten($event: Kitten){
    this.kittensList.push($event);
  }

  displayInfo: boolean = false;
}