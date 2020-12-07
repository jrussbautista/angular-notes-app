import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesUrl = `${environment.apiUrl}/notes`;

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.notesUrl}/${id}`);
  }
}
