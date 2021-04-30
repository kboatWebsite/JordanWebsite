import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../post.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public postForm: FormGroup = new FormGroup({});

  constructor(public postService: PostService, public angularFirestore:AngularFirestore, private db: AngularFireDatabase) { 
      this.postForm = new FormGroup({
        title: new FormControl(''),
        date: new FormControl(''),
        content: new FormControl(''),
        imageID: new FormControl(''),
        priority: new FormControl('')
      })  
    }

  ngOnInit(): void {
  }

  onSubmit() {
    // var lastPriority = "";
    // var Posts = this.db.list('/posts', ref => ref.limitToLast(1)).valueChanges();
    // Posts.subscribe(post => {
    //   console.log(post);
    //   var info = post.pop();
    //   if(info){
    //     console.log(info);
    //   }
    // })

    var post = new Post(this.postForm.value.title, this.postForm.value.date, this.postForm.value.content, this.postForm.value.imageID, this.postForm.value.priority);
    this.postService.createPost(post);
    this.postForm.reset();
   };

}
