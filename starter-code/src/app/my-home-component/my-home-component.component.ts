import { Component, OnInit } from '@angular/core';

import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  movies: Object[] = [];
  constructor(private movieInfo: MovieInfoService ) { }

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movies =  this.movieInfo.getmovies();
  }
}
