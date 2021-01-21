import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/notes.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent implements OnInit {
  @Input() note: Note;

  @Output() remove: EventEmitter<Note> = new EventEmitter();
  @Output() view: EventEmitter<Note> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRemove() {
    this.remove.emit(this.note);
  }

  onView() {
    this.view.emit(this.note);
  }
}
