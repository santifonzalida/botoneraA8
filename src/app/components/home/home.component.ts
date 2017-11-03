import { Component, OnInit } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'btn-a8-home',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  version: string = 'v1.092';
  audio = new Audio();
  public itemRef: AngularFireObject<any>;
  public acumuladorSonidos = [];

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
    'delfin_nopuedeser': 'delfin_nopuedeser',
    'ledijeNo': 'ledijequeNo',
    'mesobra': 'mesobra',
    'trabas_servicioBug': 'trabas_servicioBug',
    'trabas_servicio': 'trabas_servicio',
    'trabas_activopasivo': 'trabas_activopasivo',
    'trabas_mecontaron': 'trabas_mecontaron',
    'trabas_asadito': 'trabas_asadito',
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
    'ronnie_yeabuddy': 'ronnie_yeabuddy',
    'ronnie_yeabuddy1': 'ronnie_yeabuddy1',
    'ronnie_yea': 'ronnie_yea',
    'ronnie_wow1': 'ronnie_wow1',
    'ronnie_wow2': 'ronnie_wow2',
    'ronnie_wow3': 'ronnie_wow3',
    'ronnie_wooo1': 'ronnie_wooo1',
    'ronnie_wooo2': 'ronnie_wooo2',
    'ronnie_lightweight': 'ronnie_lightweight',
    'ronnie_gobaby': 'ronnie_gobaby',
    'ronnie_alright': 'ronnie_alright',
    'duroduro': 'duroduro',
    'cocosily': 'cocosily',
    'oldenait': 'oldenait',
    'peamoa_sutrasero': 'peamoa_sutrasero'
  };

  constructor(private db: AngularFireDatabase) {
    this.itemRef = db.object('/sonidos');
  }

  public play(sound): void {
    console.log(sound);
    this.audio.src = `../assets/audio/${this.SOUNDS[sound]}.mp3`;
    this.audio.load();
    this.audio.play();

    this.acumuladorSonidos.push(sound);
    if (this.acumuladorSonidos.length >= 50) {
      this.contarRepeticiones();
      this.acumuladorSonidos = [];
    }
  }

  private contarRepeticiones() {
    var obj = {};
    for (var i = 0, j = this.acumuladorSonidos.length; i < j; i++) {
      if (obj[this.acumuladorSonidos[i]]) {
        obj[this.acumuladorSonidos[i]]++;
      }
      else {
        obj[this.acumuladorSonidos[i]] = 1;
      }
    }
    console.log(obj);
    this.subirEstadisticas(obj);
  }

  private subirEstadisticas(objeto) {
    this.itemRef.update(objeto).then(() => {
      console.log("se guardo exitosamente");
    }).catch(err => {
      console.error("error al subir estadisticas", err);
    });
  }

  public stop(): void {
    this.audio.pause();
  }

  hotkeys($event) {
    if ($event.keyCode == 16) {
      this.stop();
    }
    if ($event.keyCode == 80) {
      this.play('peamoa');
    }
    if ($event.keyCode == 81) {
      this.play('gemido');
    }
    if ($event.keyCode == 89) {
      this.play('ledijeNo');
    }
    if ($event.keyCode == 87) {
      this.play('mesobra');
    }
    if ($event.keyCode == 69) {
      this.play('trabas_mecontaron');
    }
    if ($event.keyCode == 82) {
      this.play('trabas_activopasivo');
    }
    if ($event.keyCode == 84) {
      this.play('trabas_servicio');
    }
    if ($event.keyCode == 85) {
      this.play('trabas_asadito');
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
    if ($event.keyCode == 74) {
      this.play('endu_escuchabaelbam');
    }
    if ($event.keyCode == 75) {
      this.play('endu_paaa');
    }
    if ($event.keyCode == 76) {
      this.play('peamoa_sutrasero');
    }
    if ($event.keyCode == 97) {
      this.play('ronnie_wow1');
    }
    if ($event.keyCode == 98) {
      this.play('ronnie_wow2');
    }
    if ($event.keyCode == 99) {
      this.play('ronnie_wow3');
    }
    if ($event.keyCode == 100) {
      this.play('ronnie_wooo1');
    }
    if ($event.keyCode == 101) {
      this.play('ronnie_wooo2');
    }
    if ($event.keyCode == 102) {
      this.play('ronnie_yeabuddy');
    }
    if ($event.keyCode == 103) {
      this.play('ronnie_yeabuddy1');
    }
    if ($event.keyCode == 104) {
      this.play('ronnie_yea');
    }
    if ($event.keyCode == 96) {
      this.play('ronnie_lightweight');
    }
    if ($event.keyCode == 105) {
      this.play('ronnie_gobaby');
    }
    if ($event.keyCode == 106) {
      this.play('ronnie_alright');
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
    if ($event.keyCode == 191) {
      this.play('trabas_servicioBug');
    }
    if ($event.keyCode == 78) {
      this.play('tano-nooo');
    }
    if ($event.keyCode == 73) {
      this.play('cocosily');
    }
    return true;
  }

}
