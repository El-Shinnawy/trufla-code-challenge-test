import { Injectable } from '@angular/core';
import { XhrService } from '../../server/xhrService/xhr.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private xhrService: XhrService) { }

  getAllImages(){
  return this.xhrService.call({
    method: 'GET',
    url: 'photos',
    body:{}
  }).pipe(map(res => {
    return res;
  }));
}
}
