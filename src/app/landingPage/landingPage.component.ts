import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css'],
})
export class LandingPageComponent {
  displayedColumns: string[] = ['id', 'title', 'userId', 'completed'];
  dataSourcedata: any;
  apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGridData();
  }

  getGridData() {
    var resp = this.sendGetRequest().subscribe((responseBody: any) => {
      this.dataSourcedata = responseBody;
    });
    return resp;
  }

  sendGetRequest() {
    return this.http.get(this.apiUrl);
  }

  onBlurEvent(event: any) {
    alert('Only enter true or false please');
  }
}
