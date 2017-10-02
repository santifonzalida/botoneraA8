import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-a8-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  audio = new Audio();

  private SOUNDS = {
    'ronnie': 'RonnieColeman',
    'tabamoTomando': 'estabamoTomando',
    'carrera': 'CarreraAparentemente',
    'ua': 'uaaahah',
    'endu': 'enduEndu',
    'tramboliko': 'tramboliko',
    'volo': 'volo',
    'gemido': 'gemido',
    'sonRibukOSonNaik': 'esaSonRibuOSonNai',
    'helloWeynes': 'helloWeynes',
    'seraEsta': 'seraEstaBrother',
    'taMuyPegaa': 'taMuiPegaaEsaCancion',
    'brea': 'yBuenoBrea',
	'ledijeNo':'ledijequeNo',
	'mesobra':'mesobra',
	'servicio':'servicio',
	'activoPasivo':'activoPasivo'
  };

  public play(sound): void {
    console.log(sound);
    this.audio.src = `../assets/audio/${this.SOUNDS[sound]}.mp3`;
    this.audio.load();
    this.audio.play();
  }

  public stop(): void {
    this.audio.pause();
  }

}
