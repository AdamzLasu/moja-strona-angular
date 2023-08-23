import { Component, OnInit  } from '@angular/core';
import { toArray } from 'rxjs';
import { ListaService } from 'src/app/services/lista.service';
import * as _ from "lodash";


@Component({
  selector: 'app-lista',
  templateUrl:'./lista.component.html',
  styles: [
  ]
})

export class ListaComponent implements OnInit {
  
  enquiry: any;
  offset = 2;
  subscription: any;
  prevKeys: any[] = [];
  nextKey: any;
  constructor(private enquirySvc: ListaService) { }
  
  ngOnInit(): void {
    this.getEnquiry()
  }

  nextPage() {
    this.prevKeys.push(_.first(this.enquiry)['$key'])
    this.getEnquiry(this.nextKey)
  }

  prevPage() {
    const prevKey = _.last(this.prevKeys)
    this.prevKeys = _.dropRight(this.prevKeys)

    this.getEnquiry(prevKey)
  }

  private getEnquiry(key?: undefined) {
    this.subscription = this.enquirySvc.getEnquiry('samplePost1', this.offset, key)
    .valueChanges().subscribe(enquiry => {
          this.enquiry = _.slice(enquiry, 0, this.offset)
          this.nextKey = _.get(enquiry[this.offset], '$key')
      })
  }
}

