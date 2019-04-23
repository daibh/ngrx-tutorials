import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ACCOUNT_GET_USER_LIST, SERVER_API_URL } from '../../../../../app.constant';
import { IUser } from '../../../../../shared/model/user.model';
import { LocalStorageService } from '../../../../../core/local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private httpClient: HttpClient,
    protected localStorageService: LocalStorageService,
    private injector: Injector
  ) { }

  fetch(req?: { page: string }): Observable<any> {
    return this.httpClient.get<any>(`${SERVER_API_URL}/${API_ACCOUNT_GET_USER_LIST}`, { params: req });
  }
}
