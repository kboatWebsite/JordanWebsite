import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  Posts: Observable<any> = new Observable;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    // var list = new Array;
    this.Posts = this.db.list('/posts', ref => ref.orderByChild('priority')).valueChanges();
    // var priority = this.db.list('/posts', ref => ref.orderByChild('priority').limitToFirst(1)).valueChanges();
    // console.log(priority);
    // this.Posts.subscribe(post => {
    //   list.push(post);
    // });
    // list.sort((x, y) => {
    //   console.log("x " + x);
    //   console.log("y " + y);
    //   return x.timestamp - y.timestamp;
    // });
    // console.log(list);
  }

}
