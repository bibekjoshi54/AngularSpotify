import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private secretKey: string;
  private cliendID: string;
  constructor(private _http: Http) {

  }

  searchMusic(str: string, type= 'artist') {
    this.searchUrl = 'https://api.spotify.com/search/query' + str +
    '&offset=0&limit=20&type=' + type + '&market=US';
    console.log(this.searchUrl);
    return this._http.get(this.searchUrl).map(res => res.json());
}

}
