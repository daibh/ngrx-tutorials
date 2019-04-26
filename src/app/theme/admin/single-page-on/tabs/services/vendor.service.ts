import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { API_VENDORS_SELECT, SERVER_API_URL } from '../../../../../app.constant';
import { LocalStorageService } from '../../../../../core/local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class VendorService {
  constructor(
    private httpClient: HttpClient,
    protected localStorageService: LocalStorageService,
    private injector: Injector
  ) { }

  fetchOption(req?: { page: string }): Observable<any> {
    return this.httpClient.get<any>(`${SERVER_API_URL}/${API_VENDORS_SELECT}`, { params: req });
  }
}
