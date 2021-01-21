import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDashboardComponent } from './pages/note-dashboard/note-dashboard.component';
import { NoteViewerComponent } from './pages/note-viewer/note-viewer.component';

const routes: Routes = [
  {
    path: 'notes',
    children: [
      {
        path: '',
        component: NoteDashboardComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: NoteViewerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
