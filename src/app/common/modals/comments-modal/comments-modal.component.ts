import { Component, OnInit, Input, Inject} from '@angular/core';
import { alertService } from 'src/app/ajs-upgraded-providers';
import { MatDialogRef } from '@angular/material/dialog';
import { FileDownloaderService } from '../../file-downloader/file-downloader.service';

@Component({
  selector: 'comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.scss'],
})
export class CommentsModalComponent implements OnInit {
  @Input() commentResourceUrl: string;
  @Input() commentType: string;
  public rawResourceUrl: string = undefined;

  constructor(
    @Inject(alertService) private alertService: any,
    public dialogRef: MatDialogRef<CommentsModalComponent>,
    @Inject(FileDownloaderService) private fileDownloaderService: FileDownloaderService,
  ) {}

  ngOnInit(): void {
    this.fileDownloaderService.downloadBlob(
      this.commentResourceUrl,
      (url, response) =>
        {
          this.rawResourceUrl = url;
          this.commentResourceUrl = url;
        },
      (error) => 
        {
          this.alertService.add('danger', `Error downloading comment: ${error}`, 6000);
        }
    )
  }

  close(): void {
    this.fileDownloaderService.releaseBlob(this.rawResourceUrl);
    this.dialogRef.close();
  }
}