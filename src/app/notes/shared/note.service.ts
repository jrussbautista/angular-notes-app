import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { NOTES } from '../mock-notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  getNotes(): Note[] {
    return NOTES;
  }
}
