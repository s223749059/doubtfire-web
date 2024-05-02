import { Component, OnInit, Input, Inject} from '@angular/core';
import { alertService } from 'src/app/ajs-upgraded-providers';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'upload-submission-modal',
  templateUrl: './upload-submission-modal.component.html',
  styleUrls: ['./upload-submission-modal.component.scss'],
})
export class UploadSubmissionModalComponent implements OnInit {
  @Input() task: string;
  @Input() reuploadEvidence: any;

  constructor(
    @Inject(alertService) private alertService: any,
    public dialogRef: MatDialogRef<UploadSubmissionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    console.log('upload-submission-modal ngOnInit()');
  }
}
