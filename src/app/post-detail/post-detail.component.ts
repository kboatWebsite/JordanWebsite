import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  Posts: Observable<any> = new Observable;
  id: string = "";

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.id = window.location.pathname.replace("/post/", "");
    this.Posts = this.db.list('/posts', ref => ref.orderByChild('id').equalTo(this.id)).valueChanges();
  }

}
