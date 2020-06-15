import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/Services/people.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public people: any = [];
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
      this.peopleService.getPeople().subscribe((people) =>{
          this.people = people;
      })
      
  }
}
