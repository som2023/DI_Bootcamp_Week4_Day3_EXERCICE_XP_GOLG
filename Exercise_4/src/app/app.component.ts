import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise_4_Turning_An_Observable_Into_A_Promise_Instructions';
  moviesList:any =  [];

  constructor(private http: HttpService) {
  }

  ngOnit() {
    return new Promise((resolve, reject) => {
      this.http.get("http://swapi.dev/api/films/")
    .subscribe(res => this.moviesList = res)

    })

  }
}
