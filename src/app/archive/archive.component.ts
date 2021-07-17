import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  Posts: Observable<any> = new Observable;
  id: string = "";

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.Posts = this.db.list('/posts', ref => ref.orderByChild('priority')).valueChanges();
  }

}
