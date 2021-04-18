import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../common/kitten';
/*import { ListKitten } from '../list-kitten';*/

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent implements OnInit {
  @Input() chosenKitten: Kitten;

  public userKittenList: Kitten[] = [
    {
      name: 'cherry',
      race: 'greycat',
      birthday: null,
      pic: 'http://placekitten.com/200/200',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
