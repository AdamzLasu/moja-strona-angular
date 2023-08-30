import { Injectable, OnInit } from '@angular/core';
import { AbstractFiltr } from './abstract-filtr';

@Injectable({
  providedIn: 'root'
})
export class AbstractFiltrService extends AbstractFiltr implements OnInit {

  ngOnInit(): void {
    this.logMes('tekst')
  }
}
