import { Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProgressModalComponent } from './progress-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ProgressModalService {
  constructor(public dialog: MatDialog) {}

  public show(task: any) {
    let dialogRef: MatDialogRef<ProgressModalComponent, any>;
    dialogRef = this.dialog.open(ProgressModalComponent);
  }
}
