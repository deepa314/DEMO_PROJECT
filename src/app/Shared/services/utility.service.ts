import { Injectable } from '@angular/core';
import{LoaderService}from '../services/loader.service'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {
    constructor(
        private readonly snackBar: MatSnackBar,
        private loader: LoaderService
      ) { }


    public showMessage(message: string) {
        this.loader.hideLoader();
        const config = new MatSnackBarConfig();
        config.panelClass = ['redColor'];
        config.duration = 5000;
        this.snackBar.open(message, '', config);
      }

}
