import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../common/kitten';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';
import { addKittenToUserList } from '../common/kittenList';
@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  public kittenList: Kitten[] = [
    {
      name: 'bob',
      race: 'whitecat',
      birthday: '01/04/2021',
      pic: 'http://placekitten.com/200/199',
    },
    {
      name: 'bobby',
      race: 'darkcat',
      birthday: '01/04/2021',
      pic: 'http://placekitten.com/200/200',
    },
  ];

  public userKittenList: Kitten[];

  public chosenKitten: Kitten;

  constructor() {}

  ngOnInit(): void {}

  receiveKitten($event: Kitten): void {
    this.kittenList.push($event);
  }

  displayInfo: boolean = false;
}
