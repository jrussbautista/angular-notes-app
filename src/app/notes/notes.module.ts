import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-list/note-detail/note-detail.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NoteListComponent, NoteDetailComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [NoteListComponent],
})
export class NotesModule {}
