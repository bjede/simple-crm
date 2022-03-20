import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //user: User = new User();
  allUsers = [];

  constructor(public dialog: MatDialog, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({idField: 'customId'})
      .subscribe((changes: any) => {
        console.log(changes);
        this.allUsers = changes;

      });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);

    /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    }); */
  }



}
