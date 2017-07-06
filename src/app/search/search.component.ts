import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { SpotifyService } from 'app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

searchForm: FormGroup;
  constructor(private fb: FormBuilder, private _spotifyService: SpotifyService) { }



  ngOnInit() {

    this.searchForm = this.fb.group({
          searchStr : ['']
    });
  }


  searchMusic(): void {
      console.log(this.searchForm.get('searchStr').value);
       this._spotifyService.searchMusic(this.searchForm.get('searchStr').value)
        .subscribe(res => console.log(res));

  }
}
