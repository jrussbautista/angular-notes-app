import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { NoteDashboardComponent } from './pages/note-dashboard/note-dashboard.component';
import { NoteViewerComponent } from './pages/note-viewer/note-viewer.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';

@NgModule({
  declarations: [
    NoteDashboardComponent,
    NoteViewerComponent,
    NoteFormComponent,
    NoteDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NotesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [NoteDashboardComponent],
})
export class NotesModule {}
