import * as uuid from 'uuid';

export class Post {
    id: string;
    constructor(private title:string, private date:Date, private content:string, private imageID:string, private priority:number) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.imageID = imageID;
        this.id = uuid.v4();
        this.priority = priority;
    }
}
