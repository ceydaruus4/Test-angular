import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:8080";

  public getPeople() {
    return this.http.get(this.url + "/people");
  }
}
