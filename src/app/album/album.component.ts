import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AlbumService } from '../services/album.service';
import { Song } from '../models/song';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() album ?: Album;
  songs !: Array<Song>;
  val!:number;
  constructor(private route: ActivatedRoute, private albumService : AlbumService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id  = params.get('id');
      this.albumService.getAlbumById(id)
        .subscribe({
          next: (data : Album) => this.album = data,
          error: (err: any) => console.log(err)
        })
    })
  }
  getSongs():void{
    this.albumService.getSongs()
    .subscribe({
      next: (data : Song[]) => {
        this.songs = data;
      },
      error: err => console.log(err)
    })

  }

  like(){ 
    this.albumService.like(this.album?.id).subscribe({
      next: (data : Album) => {
        this.albumService.getAlbumById(String(data.id))
          .subscribe({
            next: (data : Album) => this.album = data,
            error: (err) => console.log(err)
          })
      },
      error: (err) => console.log(err)
    });
  }
  dislike():void{this.albumService.dislike(this.album?.id).subscribe({
    next: (data : Album) => {
      this.albumService.getAlbumById(String(data.id))
        .subscribe({
          next: (data : Album) => this.album = data,
          error: (err) => console.log(err)
        })
    },
    error: (err) => console.log(err)
  });
}
}