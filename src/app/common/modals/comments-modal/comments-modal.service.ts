import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CommentsModalComponent } from './comments-modal.component';

@Injectable({
  providedIn: 'root',
})
export class CommentsModalService {
  constructor(public dialog: MatDialog) {}

  public show(commentResourceUrl: string, commentType: string) {
    let dialogRef: MatDialogRef<CommentsModalComponent, any>;
    dialogRef = this.dialog.open(CommentsModalComponent, {position: {top: '2.5%'}});
    dialogRef.updateSize("62.5%", "");
    dialogRef.componentInstance.commentResourceUrl = commentResourceUrl;
    dialogRef.componentInstance.commentType = commentType;
  }
}