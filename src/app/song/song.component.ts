import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit { 
  songs !: Array<Song>;
  filteredSongs !:Array<Song>;
  selectedAlbum ?: Album; 

  
  constructor(private albumService : AlbumService) {
   
  }
 
  ngOnInit(): void {
    this.albumService.getSongs()
    .subscribe({
      next: (data : Song[]) => {
        this.songs = data;
        this.filteredSongs = this.songs;
      },
      error: err => console.log(err)
    })
    
}
}
