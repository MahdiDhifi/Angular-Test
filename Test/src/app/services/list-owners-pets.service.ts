import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwnersModule } from '../modules/owners/owners.module';

@Injectable({
  providedIn: 'root'
})
export class ListOwnersPetsService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners';

  getOwners() {
    return this.http.get<OwnersModule[]>(this.baseUrl)
  }
}