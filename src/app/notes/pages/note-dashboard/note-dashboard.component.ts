import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../../note.service';
import { Note } from '../../models/notes.model';

@Component({
  selector: 'app-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.css'],
})
export class NoteDashboardComponent implements OnInit {
  notes: Note[] = [];
  isLoadingNotes: boolean = true;

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.isLoadingNotes = true;
    this.noteService.getNotes().subscribe((results) => {
      this.notes = results;
      this.isLoadingNotes = false;
    });
  }

  handleAddNote(note: Note): void {
    this.noteService.addNote(note).subscribe((data: Note) => {
      this.notes = [data, ...this.notes];
    });
  }

  handleRemoveNote(selectedNote: Note): void {
    this.noteService.deleteNote(selectedNote.id).subscribe(() => {
      this.notes = this.notes.filter((note) => note.id !== selectedNote.id);
    });
  }

  handleViewNote(selectedNote: Note): void {
    this.router.navigate(['/notes', selectedNote.id]);
  }
}
