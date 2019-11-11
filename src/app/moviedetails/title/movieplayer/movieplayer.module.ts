import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovieplayerPage } from './movieplayer.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
const routes: Routes = [
  {
    path: '',
    component: MovieplayerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatVideoModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MovieplayerPage]
})
export class MovieplayerPageModule {}
