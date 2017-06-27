import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieId: number;
  theMovie: Object;
  constructor(private movieinfo: MovieInfoService,
    private movieRoute: ActivatedRoute) { }

  ngOnInit() {
    this.movieRoute.params
    .subscribe((paramsResult) =>
          this.movieId = Number(paramsResult['id']));

    this.fetchAMovie();
  }

  fetchAMovie() {
    this.theMovie = this.movieinfo.getMovie(this.movieId);
  }



}
