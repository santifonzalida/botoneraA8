import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-a8-home',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: 'home.component.html',
})

export class HomeComponent {

  version: string = 'v1.078';
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
    'endu_aparentemente': 'endu_aparentemente',
    'diego_canicani': 'diego_canicani',
    'diego_eldiegoarmando': 'diego_eldiegoarmando',
    'diego_eldiegote': 'diego_eldiegote',
    'diego_eldiego': 'diego_eldiego',
    'tano-camiseta-boca': 'tano-pasman/camiseta-boca',
    'tano-dala-boludo': 'tano-pasman/dala-boludo',
    'tano-dale-boludo': 'tano-pasman/dale-boludo',
    'tano-en-la-b': 'tano-pasman/en-la-b',
    'tano-isabel': 'tano-pasman/isabel',
    'tano-jj': 'tano-pasman/jj-lopex',
    'tano-pelota-pendejo': 'tano-pasman/la-pelota-pendejo',
    'tano-publicidad-pelotudo': 'tano-pasman/la-publicidad-pelotudo',
    'tano-lpqmp': 'tano-pasman/lpqmp',
    'tano-lpqmp-ndm': 'tano-pasman/lpqmp-ndm',
    'tano-negro-de-mierda': 'tano-pasman/negro-de-mierda',
    'tano-nooo': 'tano-pasman/noooo',
    'tano-paraguayo': 'tano-pasman/paraguayo',
    'tano-penal-pelotudo': 'tano-pasman/penal-pelotudo',
    'tano-huevo': 'tano-pasman/pongan-huevo',
    'tano-public': 'tano-pasman/publicidad-lpqtp',
    'tano-mierda': 'tano-pasman/que-mierda-es-esto',
    'tano-boca': 'tano-pasman/te-fuiste-a-boca',
    'ronnie_yeabuddy':'ronnie_yeabuddy',
    'ronnie_yeabuddy1':'ronnie_yeabuddy1',
    'ronnie_yea':'ronnie_yea',
    'ronnie_wow1':'ronnie_wow1',
    'ronnie_wow2':'ronnie_wow2',
    'ronnie_wow3':'ronnie_wow3',
    'ronnie_wooo1':'ronnie_wooo1',
    'ronnie_wooo2':'ronnie_wooo2',
    'ronnie_lightweight':'ronnie_lightweight',
    'ronnie_gobaby':'ronnie_gobaby',
    'ronnie_alright':'ronnie_alright',
    'duroduro':'duroduro',
    'cocosily':'cocosily',
    'oldenait':'oldenait'
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
    if ($event.keyCode == 81) {
      this.play('gemido');
    }
    if ($event.keyCode == 87) {
      this.play('ledijeNo');
    }
    if ($event.keyCode == 69) {
      this.play('mesobra');
    }
    if ($event.keyCode == 82) {
      this.play('servicio');
    }
    if ($event.keyCode == 65) {
      this.play('endu_carrera');
    }
    if ($event.keyCode == 83) {
      this.play('endu_aparentemente');
    }
    if ($event.keyCode == 68) {
      this.play('endu_endu');
    }
    if ($event.keyCode == 70) {
      this.play('endu_aceleradaendu');
    }
    if ($event.keyCode == 71) {
      this.play('endu_elotroestabaasi');
    }
    if ($event.keyCode == 72) {
      this.play('endu_susurros');
    }
    if ($event.keyCode == 90) {
      this.play('diego_eldiego');
    }
    if ($event.keyCode == 88) {
      this.play('diego_eldiegote');
    }
    if ($event.keyCode == 67) {
      this.play('diego_eldiegoarmando');
    }
    if ($event.keyCode == 86) {
      this.play('diego_fenomenodrogadicto');
    }
    if ($event.keyCode == 66) {
      this.play('diego_canicani');
    }
    if ($event.keyCode == 78) {
      this.play('diego_quienvaaser');
    }

  }


}
