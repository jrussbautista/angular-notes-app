import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/notes.model';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  @Input() note: Note;

  @Output() onSubmit: EventEmitter<Note> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(note: Note, isValid: boolean | null) {
    if (isValid) {
      this.onSubmit.emit(note);
    }
  }
}
