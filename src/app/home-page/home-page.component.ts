import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // Posts: Post[] = [];
  Posts: Observable<any> = new Observable;

  constructor(private postService:PostService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.Posts = this.db.list<Post>("posts").valueChanges();
  }

}
