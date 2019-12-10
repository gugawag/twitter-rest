import { Injectable } from '@angular/core';
import {Post} from './post';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://localhost:3000/mensagens');
  }

  enviarPost(post: Post): Observable<Post>{
    return this.httpClient.post<Post>('http://localhost:3000/mensagens', JSON.stringify(post));
  }
}
