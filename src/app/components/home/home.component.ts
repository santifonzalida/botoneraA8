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
    'tabamoTomando': 'estabamoTomando',
    'carrera': 'CarreraAparentemente',
    'ua': 'uaaahah',
    'endu': 'enduEndu'
  };

  constructor() {
    /*filaAudio1 = [
      {id: 1, src= '../assets/audio/RonnieColeman.mp3'},
      {id: 2, src= '../assets/audio/enduEndu.mp3'},
      {id: 3, src= '../assets/audio/CarreraAparentemente.mp3'},
      {id: 4, src= '../assets/audio/uaaahah.mp3'}
    ];*/
  }

  ngOnInit() { }
  
  public play(sound) {
    console.log("yeah sound!");
    this.audio.src = `../assets/audio/${this.SOUNDS[sound]}.mp3`;
    this.audio.load();
    
  /*public play(index: number) {
    for (let sonido of fileAudio1) {
      if(sonido.id == index){
        this.audio.src = sonido.src;
        this.audio.load();
      }
    }*/
    this.audio.play();
  }

  public stop() {
    this.audio.pause();
  }

}
