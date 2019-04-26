import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { isDefined } from 'src/app/shared/util/common.util';
import { API_PRODUCT, API_PRODUCTS, SERVER_API_URL } from '../../../../../app.constant';
import { LocalStorageService } from '../../../../../core/local-storage/local-storage.service';
import { RequestOptions } from '../reducers/product.reducer';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    protected localStorageService: LocalStorageService,
    private injector: Injector
  ) { }

  fetch(req?: RequestOptions): Observable<any> {
    let requestOption: HttpParams = createRequestOption(req);
    return this.httpClient.get<any>(`${SERVER_API_URL}/${API_PRODUCTS}`, { params: requestOption });
  }

  save(product: any): Observable<any> {
    const isUpdate = product && product.id;
    if (isUpdate) {
      return this.httpClient.put<any>(`${SERVER_API_URL}/${API_PRODUCT}/${product.id}`, product);
    }
    return this.httpClient.post<any>(`${SERVER_API_URL}/${API_PRODUCT}`, product);
  }
}

export const createRequestOption = (req?: RequestOptions) => {
  let param = new HttpParams();
  if (isDefined(req)) {
    Object.keys(req).forEach((k) => {
      if (k === 'query') {
        Object.keys(req.query).forEach((k) => {
          param = param.set(k, req.query[k]);
        });
      } else {
        param = param.set(k, req[k]);
      }
    })
  }
  return param;
}