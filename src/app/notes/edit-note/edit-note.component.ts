import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';
import { Observable } from 'rxjs';
import { Note } from '../models/notes.model';

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
    const id = this.route.snapshot.paramMap.get('id');
    this.getNote(id as string);
  }

  getNote(id: string): void {
    this.noteService.getNoteById(id).subscribe((result) => {
      this.note = result;
    });
  }

  handleSubmit(note: Note, isValid: boolean | null) {
    if (isValid) {
      this.updateNote(note);
    }
  }

  updateNote(note: Note) {
    this.noteService.updateNote(this.note.id, note).subscribe((data: Note) => {
      this.note = Object.assign({}, this.note, data);
      alert('Successfully updated note');
      this.goBack();
    });
  }

  goBack(): void {
    this.router.navigate(['/notes']);
  }
}
