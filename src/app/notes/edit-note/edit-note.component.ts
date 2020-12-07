import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { Observable } from 'rxjs';
import { Note } from '../shared/notes.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {
  note: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    this.getNote(noteId as string);
  }

  getNote(noteId: string): void {
    this.noteService.getNoteById(noteId).subscribe((result) => {
      this.note = result;
    });
  }

  goBack(): void {
    this.router.navigate(['/notes']);
  }
}
