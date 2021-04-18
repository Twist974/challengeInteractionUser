import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../common/kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
name: string;
race: string;
birthday: string;
pic: string;

  @Output()
  sendNewKittenDataToKittensList: EventEmitter<Kitten> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendKitten(): any {
   this.sendNewKittenDataToKittensList.emit(
     new Kitten(this.name, this.race, this.birthday, this.pic)
   );
   this.name="";
   this.race= "";
   this.birthday= "";
   this.pic="";
  }
}