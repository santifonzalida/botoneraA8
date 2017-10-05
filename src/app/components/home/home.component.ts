import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-a8-home',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: 'home.component.html',
})

export class HomeComponent {

  version: string = 'v0.051';
  audio = new Audio();

  private SOUNDS = {
    'tabamoTomando': 'estabamoTomando',
    'tramboliko': 'tramboliko',
    'volo': 'volo',
    'gemido': 'gemido',
    'sonRibukOSonNaik': 'esaSonRibuOSonNai',
    'helloWeynes': 'helloWeynes',
    'seraEsta': 'seraEstaBrother',
    'taMuyPegaa': 'taMuiPegaaEsaCancion',
    'brea': 'yBuenoBrea',
    'ledijeNo': 'ledijequeNo',
    'mesobra': 'mesobra',
    'servicio': 'servicio',
    'activoPasivo': 'activoPasivo',
    'peamoa': 'peamoa',
    'forinia': 'forinia',
    'sosunbandido': 'sosunbandido',
    'endu_elotroestabaasi': 'endu_elotroestabaasi',
    'endu_paaa': 'endu_paaa',
    'endu_susurros': 'endu_susurros',
    'endu_endu': 'endu_endu',
    'endu_aceleradaendu': 'endu_aceleradaendu',
    'endu_escuchabaelbam': 'endu_escuchabaelbam',
    'endu_carrera': 'endu_carrera',
    'endu_aparentemente': 'endu_aparentemente'
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

  hotkeys($event) {
    if ($event.keyCode == 32) {
      this.stop();
    }
  }


}
