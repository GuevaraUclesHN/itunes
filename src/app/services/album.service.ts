import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private httpClient : HttpClient) { }

  getAlbums() : Observable<Album[]>{    return this.httpClient.get<Album[]>(`${environment.baseApiUrl}/Albums`);
}

getAlbumById(id : string | null) : Observable<Album>{
  return this.httpClient.get<Album>(`${environment.baseApiUrl}/Albums/${id}`);
 
}
getSongs() : Observable<Song[]>{    return this.httpClient.get<Song[]>(`${environment.baseApiUrl}/Songs`);
}
like(id:number | undefined): Observable<Album>{
  return this.httpClient.post<Album>(`${environment.baseApiUrl}/Albums/${id}/like`, null);
}
dislike(id:number | undefined): Observable<Album>{
  return this.httpClient.post<Album>(`${environment.baseApiUrl}/Albums/${id}/dislike`, null);
}
}
