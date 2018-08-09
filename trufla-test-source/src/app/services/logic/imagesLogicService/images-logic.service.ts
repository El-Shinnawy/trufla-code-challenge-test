import { Injectable } from '@angular/core';
import { ImagesService } from '../../server/imagesService/images.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesLogicService {

  constructor(private imagesService: ImagesService) { }

  getImages() {
    return this.imagesService.getAllImages();
  }
}