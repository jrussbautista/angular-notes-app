import { Injectable } from '@angular/core';
import { Note } from './models/notes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

  addNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}`;
    return this.http.post<Note>(url, note);
  }

  updateNote(id: string, note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.put<Note>(url, note);
  }

  deleteNote(id: string): Observable<void> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
