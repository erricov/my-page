import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  comments = [
    { 'id': 0, 'user': 'Hector Guedez', 'position': 'Linkit Co-President', 'comment': 'Creative, Willing to learn everything, Active'},
    { 'id': 1, 'user': 'Elvis Villarroel', 'position': 'Linkit Co-President', 'comment': 'Respectful, he loves what he does'}
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.openDialog();
  }

}
