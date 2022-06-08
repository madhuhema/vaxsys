import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private options: MatSnackBarConfig = {
    duration: 4000,
    verticalPosition: 'top',
  };

  private result!: boolean;

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  showSuccess(message: string) {
    this._snackBar.open(message, 'close', { ...this.options, politeness: 'polite' })
  }

  showError(message: string) {
    this._snackBar.open(message, 'close', { ...this.options, politeness: 'assertive' })
  }

  prompt(message: string) {
    const dialogRef = this.dialog.open(ToastDialog, {
      width: '250px',
      data: { message, result: this.result },
    });
    return dialogRef.afterClosed();
  }
}

@Component({
  selector: 'toast-dialog',
  templateUrl: './dialog.component.html',
})
export class ToastDialog {
  message: string;
  constructor(public dialogRef: MatDialogRef<ToastDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, result: boolean }) {
    this.message = data.message;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
