import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/notes.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.notes = this.noteService.getNotes();
  }

  deleteNote(selectedNote: Note): void {
    this.notes = this.notes.filter((note) => note.id !== selectedNote.id);
  }
}
