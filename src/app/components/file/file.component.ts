import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() parsedFile: FormData;
  rawText = null;
  parsedArr: object[] = [];
  newObj = {}
  constructor() { }

  ngOnInit(): void {
    console.log(this.parsedFile)
    for (let prop in this.parsedFile) {
      this.rawText = this.parsedFile[prop]
    }
    // this.parsedArr.push(this.parsedFile)
    for (let key in this.parsedFile) {
      if (this.parsedFile[key] && key !== "raw_text" && key !== "vatitems") {
        this.newObj[key] = this.parsedFile[key]
      }

    }

  }
}

