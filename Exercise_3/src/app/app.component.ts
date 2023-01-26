import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise_3_Making_An_HTTP_Request';
  moviesList:any =  [];

  constructor(private http: HttpService) {
  }

//l'exercie 4 est contenu dans le fIT
  ngOnit() {

    this.http.get("http://swapi.dev/api/films/")
    .subscribe(res => this.moviesList = res)
  }
}
