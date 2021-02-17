import { Component, OnInit } from '@angular/core';
import { BlogEntry } from './blog-entry';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entries: Array<BlogEntry> = [];
  createBlogEntry(title: string, image: string, text: string){
    let entry = new BlogEntry();
    entry.title = title;
    entry.text = text;
    entry.image = image;
    this.entries.push(entry)
  }

}
