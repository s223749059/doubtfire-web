/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable prettier/prettier */
import { Component, OnInit, Input, Inject} from '@angular/core';
import { AlertService } from 'src/app/common/services/alert.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/api/models/user/user';
import { Unit } from 'src/app/api/models/unit';
import { Campus, CampusService } from 'src/app/api/models/doubtfire-model';
import { ProjectService } from 'src/app/api/services/project.service';

@Component({
  selector: 'unit-student-enrolment-modal',
  templateUrl: 'unit-student-enrolment-modal.component.html',
})
export class UnitStudentEnrolmentModalComponent {
  constructor(
    @Inject(AlertService) private alertService: any,
    public dialogRef: MatDialogRef<UnitStudentEnrolmentModalComponent>,
    private campusService: CampusService,
    private newProjectService: ProjectService,
  ) {}

  @Input() unit: Unit;
  public studentId: User;
  campuses: Campus[];
  campusId: number = 1;

  ngOnInit(): void {
    this.campusService.query().subscribe((campuses) => {
      this.campuses = campuses;
      this.campusId = campuses[0].id;
    });
  }

  public enrolStudent(studentId: any, campusId: any): void {
    if (!campusId) {
      this.alertService.error('Campus missing. Please indicate student campus');
      return
    }

    this.newProjectService.create(
      {},
      { cache: this.unit.studentCache,
        body: {
          unit_id: this.unit.id,
          student_num: studentId,
          campus_id: campusId
        },
        constructorParams: this.unit
       }
    ).subscribe({
      next: (project) => {
        this.alertService.success('Student enrolled');
        this.dialogRef.close();
      },
      error: (message) => {
        this.alertService.error(`Error enrolling student: ${message}`);
      },
    });
  }
}
