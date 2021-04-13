import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Post } from '../app/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // constructor(private angularFirestore: AngularFirestore) { }
  constructor(private angularFirestore: AngularFirestore,  private angularFireDatabase: AngularFireDatabase) {
    this.postsRef = angularFireDatabase.list(this.dbPath);
   }

  private dbPath = '/posts';
 
  postsRef: AngularFireList<Post>;

  getPostList() { 
    return this.angularFirestore
    .collection("posts")
    .snapshotChanges();
    // return this.postsRef;
  }

  createPost(post: Post) {
    this.postsRef.push(post);
    // return this.angularFirestore.collection('Posts').add(Object.assign({}, post));

    // return new Promise<any>((resolve, reject) =>{
    //   this.angularFirestore
    //     .collection("Posts")
    //     .add(Object.assign({}, post))
    //     .then(response => { console.log(response) }, error => reject(error));
    // });
  }
  // now < 1620014400000
}
