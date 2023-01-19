import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent {
  datas = [];
  isLoading: boolean = false;
  constructor(private httpClient: HttpClient) {
    this.fetchData().pipe(
      
    ).subscribe((data)=>{this.datas = data
      this.isLoading = false
    })
  }
  fetchData(): Observable<any> {
    this.isLoading = true
    return this.httpClient
      .get<any>('https://oak.bao.name.vn/ZBUI_PHONE_INFO/ZC_PHONE_INFO')
      
  }
}
