import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-list/note-detail/note-detail.component';

import { NotesRoutingModule } from './notes-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  declarations: [NoteListComponent, NoteDetailComponent, EditNoteComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NotesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [NoteListComponent],
})
export class NotesModule {}
