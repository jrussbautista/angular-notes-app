import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../shared/notes.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent implements OnInit {
  @Input() note: Note;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRemove() {
    this.remove.emit(this.note);
  }
}
