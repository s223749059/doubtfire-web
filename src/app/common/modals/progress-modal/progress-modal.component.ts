import { Component, OnInit, Input, Inject } from '@angular/core';
import { alertService } from 'src/app/ajs-upgraded-providers';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'progress-modal',
  templateUrl: 'progress-modal.component.html',
})
export class ProgressModalComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;

  constructor(
    @Inject(alertService) private alertService: any,
    public dialogRef: MatDialogRef<ProgressModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    console.log('progress-modal ngOnInit()');
  }

  public close() {
    this.dialogRef.close();
  }
}