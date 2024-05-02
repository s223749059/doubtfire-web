import { Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UploadSubmissionModalComponent } from './upload-submission-modal.component';

@Injectable({
  providedIn: 'root',
})
export class UploadSubmissionModalService {
  constructor(public dialog: MatDialog) {}

  public show(task: string, reuploadEvidence: any) {
    let dialogRef: MatDialogRef<UploadSubmissionModalComponent, any>;
    dialogRef = this.dialog.open(UploadSubmissionModalComponent, {position: {top: '2.5%'}});
    // dialogRef.updateSize("", "");
    dialogRef.componentInstance.task = task;
    dialogRef.componentInstance.reuploadEvidence = reuploadEvidence;
  }
}
