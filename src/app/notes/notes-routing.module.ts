import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  {
    path: 'notes',
    children: [
      {
        path: '',
        component: NoteListComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: EditNoteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
