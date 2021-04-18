import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../common/kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  newKittenName: string;
  newKittenRace: string;
  newKittenBirthday: string;
  newKittenPic: string;

  @Output()
  sendNewKittenDataTokittenList: EventEmitter<Kitten> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendKitten(): any {
    this.sendNewKittenDataTokittenList.emit(
      new Kitten(
        this.newKittenName,
        this.newKittenRace,
        this.newKittenBirthday,
        this.newKittenPic
      )
    );
    this.newKittenName = '';
    this.newKittenRace = '';
    this.newKittenBirthday = '';
    this.newKittenPic = '';
  }
}
