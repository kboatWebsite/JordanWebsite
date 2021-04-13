import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../post.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public postForm: FormGroup = new FormGroup({});

  constructor(public postService: PostService, public angularFirestore:AngularFirestore) { 
      this.postForm = new FormGroup({
        title: new FormControl(''),
        date: new FormControl(''),
        content: new FormControl(''),
        imageID: new FormControl('')
      })  
    }

  ngOnInit(): void {
  }

  onSubmit() {
    var post = new Post(this.postForm.value.title, this.postForm.value.date, this.postForm.value.content, this.postForm.value.imageID);
    this.postService.createPost(post);
    this.postForm.reset();
   };

}
