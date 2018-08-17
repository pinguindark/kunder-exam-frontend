import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../app/core/services/http-client.service';
import { Observable } from '../../../node_modules/rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  product$: Observable<any> | null = null;

  constructor(
    private httpService: HttpClientService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void{
    this.product$ = this.httpService.getProduct()
      .pipe(
        map((result: any) => {
          return result.product;
        })
      );
  }

}
