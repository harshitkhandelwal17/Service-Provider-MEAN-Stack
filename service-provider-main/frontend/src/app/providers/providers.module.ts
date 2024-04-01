import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { RouterModule } from '@angular/router';
import { AddPComponent } from './add-p/add-p.component';
import { DeletePComponent } from './delete-p/delete-p.component';
import { DetailsPComponent } from './details-p/details-p.component';
import { EditPComponent } from './edit-p/edit-p.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProvidersComponent,
    AddPComponent,
    DeletePComponent,
    DetailsPComponent,
    EditPComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    ProvidersComponent,
    ReactiveFormsModule,
    AddPComponent,
    DeletePComponent,
    DetailsPComponent,
    EditPComponent,
  ],
})
export class ProvidersModule {}
