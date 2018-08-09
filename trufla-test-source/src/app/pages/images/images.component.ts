import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ImagesLogicService } from '../../services/logic/imagesLogicService/images-logic.service';

export interface ImageData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Title', 'Image'];
  dataSource: MatTableDataSource<ImageData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private imagesLogicService: ImagesLogicService) {
    this.imagesLogicService.getImages()
      .pipe(
        map(images => {
          return images.map((image) => ({
            albumId: image.albumId,
            id: image.id,
            title: image.title,
            url: image.url,
            thumbnailUrl: image.thumbnailUrl
          }));
        })
      )
      .subscribe((allImages) => {
        this.dataSource = new MatTableDataSource(allImages);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      );
  }

  ngOnInit() {
    if (this.dataSource){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
