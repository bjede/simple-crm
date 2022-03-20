import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  loading: boolean = false;
  user = new User();
  birthdate: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: AngularFirestore ) { }



  ngOnInit(): void {
    console.log(this.user);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.user.birthDate = this.birthdate.getTime();
    console.log(this.user);
    this.loading = true;

    this.firestore
    .collection('users')
    .add( this.user.toJSON())
    .then((result: any) => {
      console.log(result);
      this.loading = false;
      this.onNoClick();
    });
    
  }
}
