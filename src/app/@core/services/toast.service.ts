import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private options: MatSnackBarConfig = {
    duration: 4000,
    verticalPosition: 'top',
  };

  constructor(private _snackBar: MatSnackBar) { }

  showSuccess(message: string) {
    this._snackBar.open(message, 'close', { ...this.options, politeness: 'polite' })
  }

  showError(message: string) {
    this._snackBar.open(message, 'close', { ...this.options, politeness: 'assertive' })
  }

}
