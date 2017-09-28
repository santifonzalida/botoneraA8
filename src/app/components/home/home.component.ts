import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-a8-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {

  audio = new Audio();
  public filaAudio1: any[] = [];
  private SOUNDS = {
    'ronnie': 'RonnieColeman',
    'tabamoTomando': 'tabamoTomando'
  };

  constructor() {

  }

  ngOnInit() { }


  public play(sound) {
    console.log("yeah sound!");
    this.audio.src = `../assets/audio/${this.SOUNDS[sound]}.mp3`;
    this.audio.load();
    this.audio.play();
  }


  public stop() {
    this.audio.pause();
  }

}
