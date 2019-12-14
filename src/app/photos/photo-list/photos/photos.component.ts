import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]){
    const rows: any[] = [];

    for(let row = 0; row < photos.length; row +=3){
      rows.push(photos.slice(row, row + 3));
    }

    return rows;
  }
}
