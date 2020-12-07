import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/notes.model';
import { NoteService } from '../shared/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  isLoadingNotes: boolean = true;

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.isLoadingNotes = true;
    this.noteService.getNotes().subscribe((results) => {
      console.log(results);
      this.notes = results;
      this.isLoadingNotes = false;
    });
  }

  handleRemoveNote(selectedNote: Note): void {
    this.notes = this.notes.filter((note) => note.id !== selectedNote.id);
  }

  handleViewNote(selectedNote: Note): void {
    this.router.navigate(['/notes', selectedNote.id]);
  }
}
