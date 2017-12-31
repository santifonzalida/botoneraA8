import { Injectable } from '@angular/core';

@Injectable()
export class ListaAudiosService {

/*
/ agregar nuevo audio o nueva lista
*/

  locoEndu = [
    {displayName:'Carrera', keyCode: '', src:'endu_carrera'},
    {displayName:'Carrera aparentemente', keyCode: '', src:'endu_aparentemente'},
    {displayName:'roberto', keyCode:'', src:'endu_roberto'},
    {displayName:'Endu endu', keyCode: '', src:'endu_endu'},
    {displayName:'Endu c/acelerada', keyCode: '', src:'endu_aceleradaendu'},
    {displayName:'El otro estaba así', keyCode: '', src:'endu_elotroestabaasi'},
    {displayName:'Susurros', keyCode: '', src:'endu_susurros'},
    {displayName:'Escuchaba el bamm', keyCode: '', src:'endu_escuchabaelbam'},
    {displayName:'Paaaa', keyCode: '', src:'endu_paaa'},
    {displayName:'los cuatro', keyCode: '', src:'endu_loscuatro'},
    {displayName:'curva muy pronuncia', keyCode: '', src:'endu_estacurva'},
    {displayName:'taba muerto', keyCode: '', src:'endu_muerto'},
    {displayName:'qepd', keyCode: '', src:'endu_qepd'}
  ];
  travas = [
    {src: 'mesobra', displayName:'Me sobra', keyCode: ''},
    {src: 'trabas_mecontaron', displayName:'me contaron', keyCode: ''},
    {src: 'trabas_activopasivo', displayName:'activo y pasivo', keyCode: ''},
    {src: 'trabas_servicio', displayName:'servicio', keyCode: ''},
    {src: 'ledijequeNo', displayName:'le dije que no!', keyCode: ''},
    {src: 'trabas_asadito', displayName:'asadito', keyCode: ''}
  ];
  ronnieColeman = [
    {src: 'ronnie_wow1', displayName:'wow 1', keyCode: ''},
    {src: 'ronnie_wow2', displayName:'wow 2', keyCode: ''},
    {src: 'ronnie_wooo1', displayName:'wooo 1', keyCode: ''},
    {src: 'ronnie_wooo2', displayName:'wooo 2', keyCode: ''},
    {src: 'ronnie_yeabuddy', displayName:'yeah buddy 1', keyCode: ''},
    {src: 'ronnie_yeabuddy1', displayName:'yeah buddy 2', keyCode: ''},
    {src: 'ronnie_yea', displayName:'yeah!', keyCode: ''},
    {src: 'ronnie_lightweight', displayName:'lightweight!', keyCode: ''},
    {src: 'ronnie_gobaby', displayName:'go baby', keyCode: ''},
    {src: 'ronnie_alright', displayName:'alright!', keyCode: ''},
    {src: 'ronnie_gobabylocaso', displayName:'go baby locaso', keyCode: ''},
    {src: 'ronnie_yea1', displayName:'yeaaaaaaah', keyCode: ''}
  ];
  clasicos = [
    {src: 'gemido', displayName:'gemido', keyCode: ''},
    {src: 'peamoa', displayName:'peamoa', keyCode: ''},
    {src: 'peamoa_sutrasero', displayName:'gemido', keyCode: ''},
    {src: 'forinia', displayName:'forinia', keyCode: ''},
    {src: 'estabamoTomando', displayName:'tabamo tomando', keyCode: ''},
    {src: 'tramboliko', displayName:'tramboliko', keyCode: ''},
    {src: 'AAAAAAAAAA', displayName:'aaaaajajaj', keyCode: ''},
    {src: 'yBuenoBrea', displayName:'brea', keyCode: ''},
    {src: 'esaSonRibuOSonNai', displayName:'son ribuk o son naik', keyCode: ''},
    {src: 'helloWeynes', displayName:'hello weynes', keyCode: ''},
    {src: 'seraEstaBrother', displayName:'sera esta', keyCode: ''},
    {src: 'taMuiPegaaEsaCancion', displayName:'ta muy pegaa', keyCode: ''},
    {src: 'delfin_nopuedeser', displayName:'no puede ser..', keyCode: ''}
  ];
  futbol = [
    {src: 'diego_eldiego', displayName:'el diego', keyCode: ''},
    {src: 'diego_eldiegoarmando', displayName:'el diego armnado', keyCode: ''},
    {src: 'diego_eldiegote', displayName:'el diegote', keyCode: ''},
    {src: 'diego_canicani', displayName:'cani cani', keyCode: ''},
    {src: 'tano-pasman/dala-boludo', displayName:'dala boludo', keyCode: ''},
    {src: 'tano-pasman/dale-boludo', displayName:'dale boludo', keyCode: ''},
    {src: 'tano-pasman/en-la-b', displayName:'en la b', keyCode: ''},
    {src: 'tano-pasman/isabel', displayName:'isabel', keyCode: ''},
    {src: 'tano-pasman/negro-de-mierda', displayName:'negro de mierda', keyCode: ''},
    {src: 'tano-pasman/noooo', displayName:'nooo', keyCode: ''},
    {src: 'tano-pasman/paraguayo', displayName:'paraguayo', keyCode: ''},
    {src: 'tano-pasman/la-publicidad-pelotudo', displayName:'que pone la publicidad', keyCode: ''},
    {src: 'tano-pasman/pongan-huevo', displayName:'pongan huevo', keyCode: ''},
    {src: 'tano-pasman/que-mierda-es-esto', displayName:'que mierda es esto', keyCode: ''}
  ];
  varios = [
    {src: 'oldenait', displayName:'ol de nait', keyCode: ''},
    {src: 'duroduro', displayName:'duro duro', keyCode: ''},
    {src: 'cocosily', displayName:'iiihhh', keyCode: ''},
    {src: 'volo', displayName:'y voló', keyCode: ''},
    {src: 'sosunbandido', displayName:'sos un bandido', keyCode: ''},
    {src: 'choro_loreventas', displayName:'lo reventas', keyCode: ''},
    {src: 'choro_zapateas', displayName:'zapateas', keyCode: ''},
    {src: 'choro_granflauta', displayName:'gran flauta', keyCode: ''},
    {src: 'choro_inimputable', displayName:'inimputable', keyCode: ''}
  ];

/*
/ Agregar hot-key
*/
public hotKeys = {
  '79': 'forinia',
  '66': 'choro_loreventas',
  '78': 'choro_zapateas',
  '77': 'choro_granflauta',
  '188': 'choro_inimputable',
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
  '86': 'diego_canicani',
  '191': 'trabas_servicioBug',
  '73': 'cocosily'
};

 public combinedHotKeys = {
  '111': 'ronnie_yea1largo',
  '106': 'ronnie_gobabylocaso',
  '192': 'endu_loscuatro',
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

  public getObjetoHotKeys(){
    return this.hotKeys;
  }
  public getObjetoHotKeysCombinadas(){
    return this.combinedHotKeys;
  }

  public getListaLocoEndu(){
    return this.locoEndu;
  }
  public getListaTravas(){
    return this.travas;
  }
  public getListaRonnieColeman(){
    return this.ronnieColeman;
  }
  public getListaClasicos(){
    return this.clasicos;
  }
  public getListaVarios(){
    return this.varios;
  }
  public getListaFutbol(){
    return this.futbol;
  }

}
