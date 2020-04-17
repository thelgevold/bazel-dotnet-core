import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AddressBookService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getEntries(): Observable<any> {
    return this.http.get('/api/friends');
  }
}
