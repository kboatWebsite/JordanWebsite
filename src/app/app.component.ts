import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// items: List<Object>;

export class AppComponent {
  title = 'JordanWebsite';

  constructor(firestore: AngularFirestore) {
    // this.item$ = firestore.collection('items').valueChanges();
    }
}
