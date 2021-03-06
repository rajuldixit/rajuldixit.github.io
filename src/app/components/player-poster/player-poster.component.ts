import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-poster',
  templateUrl: './player-poster.component.html',
  styleUrls: ['./player-poster.component.scss']
})
export class PlayerPosterComponent implements OnInit {

  @Input() currentSong: any;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {}

}
