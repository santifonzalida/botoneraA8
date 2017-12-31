import { Component, OnInit } from '@angular/core';
import { ListaAudiosService } from './home.service';

@Component({
  selector: 'btn-a8-home',
  host: { '(keyup)': 'hotkeys($event)'},
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  version: string = 'v1.130';
  audio = new Audio();

  public hotKeys = { };
  public combinedHotKeys = { };

  public listaLocoEndu = [];
  public travas = [];
  public ronnieColeman = [];
  public clasicos = [];
  public futbol = [];
  public varios = [];

  constructor(private sonidosService: ListaAudiosService) {
    this.obtenerListasAudio();
    this.hotKeys = this.sonidosService.getObjetoHotKeys();
    this.combinedHotKeys = this.sonidosService.getObjetoHotKeysCombinadas();
  }

  obtenerListasAudio(){
    this.listaLocoEndu = this.sonidosService.getListaLocoEndu();
    this.travas = this.sonidosService.getListaTravas();
    this.ronnieColeman = this.sonidosService.getListaRonnieColeman();
    this.clasicos = this.sonidosService.getListaClasicos();
    this.futbol = this.sonidosService.getListaFutbol();
    this.varios = this.sonidosService.getListaVarios();
  }

  public play(src): void {
    if(src != 'undefined'){
        this.audio.src = '../assets/audio/'+ src +'.mp3';
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
