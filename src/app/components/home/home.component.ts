import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-a8-home',
  host: { '(keyup)': 'hotkeys($event)'},
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  version: string = 'v1.092';
  audio = new Audio();

  //Agregar acá los sonidos que no requieren combinacion de teclas
  private hotKeys = {
    '69': 'trabas_mecontaron',
    '80': 'peamoa',
    '81': 'gemido',
    '87': 'mesobra',
    '89': 'ledijeNo',
    '82': 'trabas_activopasivo',
    '84': 'trabas_servicio',
    '85': 'trabas_asadito',
    '65': 'endu_carrera',
    '83': 'endu_aparentemente',
    '68': 'endu_endu',
    '192': 'endu_roberto',
    '70': 'endu_aceleradaendu',
    '71': 'endu_elotroestabaasi',
    '72': 'endu_susurros',
    '74': 'endu_escuchabaelbam',
    '75': 'endu_paaa',
	'222': 'endu_muerto',
    '76': 'peamoa_sutrasero',
    '97': 'ronnie_wow1',
    '98': 'ronnie_wow2',
    '99': 'ronnie_wow3',
    '100': 'ronnie_wooo1',
    '101': 'ronnie_wooo2',
    '102': 'ronnie_yeabuddy',
    '103': 'ronnie_yeabuddy1',
    '104': 'ronnie_yea',
	'111': 'ronnie_yea1',
    '96': 'ronnie_lightweight',
    '105': 'ronnie_gobaby',
    '106': 'ronnie_alright',
    '90': 'diego_eldiego',
    '88': 'diego_eldiegote',
    '67': 'diego_eldiegoarmando',
    '86': 'diego_fenomenodrogadicto',
    '66': 'diego_canicani',
    '78': 'diego_quienvaaser',
    '191': 'trabas_servicioBug',
    '73': 'cocosily'
  };

  //Sonidos con combinacion acá
  private combinedHotKeys = {
	'111': 'ronnie_yea1largo',
	'76': 'endu_loscuatro',
	'71': 'endu_estacurva',
	'222': 'endu_qepd',
    '49': 'lo_paramalaslenguas',
    '50': 'lo_malaslenguas',
    '51': 'lo_rrrumores',
    '52': 'lo_rumores',
    '53': 'lo_vuelto',
    '54': 'lo_besito',
    '55': 'lo_chauchau',
    '56': 'lo_rumoresaparentemente',
    '57': 'lo_rumoresaparentemente1',
    '48': 'lo_besito3',
    '96': 'lo_besito1'
  };

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
    'endu_roberto': 'endu_roberto',
	'endu_loscuatro': 'endu_loscuatro',
	'endu_estacurva': 'endu_estacurva',
	'endu_muerto': 'endu_muerto',
	'endu_qepd': 'endu_qepd',
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
	'ronnie_yea1':'ronnie_yea1',
	'ronnie_yea1largo':'ronnie_yea1largo',
    'duroduro': 'duroduro',
    'cocosily': 'cocosily',
    'oldenait': 'oldenait',
    'peamoa_sutrasero': 'peamoa_sutrasero',
    'lo_paramalaslenguas': 'lo_paramalaslenguas',
    'lo_malaslenguas': 'lo_malaslenguas',
    'lo_rrrumores': 'lo_rrrumores',
    'lo_rumores': 'lo_rumores',
    'lo_vuelto': 'lo_vuelto',
    'lo_besito': 'lo_besito',
    'lo_chauchau': 'lo_chauchau',
    'lo_rumoresaparentemente': 'lo_rumoresaparentemente',
    'lo_rumoresaparentemente1': 'lo_rumoresaparentemente1',
    'lo_besito3': 'lo_besito3',
    'lo_besito1': 'lo_besito1'
  };

  constructor() {
  }

  public play(sound): void {
    console.log(sound);
    if (sound != 'undefined') {
      this.audio.src = `../assets/audio/${this.SOUNDS[sound]}.mp3`;
      this.audio.load();
      this.audio.play();
    }
  }

  public stop(): void {
    this.audio.pause();
  }

  hotkeys($event) {
    if ($event.keyCode == 16) {
      this.stop();
    } else {
      if ($event.keyCode && $event.ctrlKey) {
        this.play(`${this.combinedHotKeys[$event.keyCode]}`);
        return true;
      }
      this.play(`${this.hotKeys[$event.keyCode]}`);
    }
    return true;
  }
}
