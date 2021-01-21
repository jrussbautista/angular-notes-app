import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from '../../models/notes.model';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.css'],
})
export class NoteViewerComponent implements OnInit {
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

  handleSubmit(note: Note) {
    this.updateNote(note);
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
