import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
 
  albums !: Array<Album>;
  filteredAlbums !:Array<Album>;
  selectedAlbum ?: Album;



  constructor(private albumService : AlbumService) {
   
 }

  ngOnInit(): void {
    this.albumService.getAlbums()
    .subscribe({
      next: (data : Album[]) => {
        this.albums = data;
        this.filteredAlbums = this.albums;
      },
      error: err => console.log(err)
    })
    
}
onClick(album : Album){
  console.log(this.selectedAlbum)
  this.selectedAlbum = album;
}

}