import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'person-info-component',
  templateUrl: 'person-info.component.html',
  styleUrls: ['person-info.component.scss'],
})
export class PersonInfoComponent implements OnInit {
  @Input() public name: string;
  @Input() public age: number;
  constructor() {}

  ngOnInit() {}
}
