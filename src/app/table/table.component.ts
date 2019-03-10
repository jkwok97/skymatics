import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() Uids: Array<string>;
  @Input() Timeout: number;

  uids = this.Uids;
  timeout:number = this.Timeout * 1000;

  constructor() { }

  ngOnInit() {
  }

  deleteUid = (e) => {
    let element = document.getElementById(e.target.parentNode.id);
    const index = this.Uids.indexOf(e.target.parentNode.id);
      if (index > -1) {
        this.Uids.splice(index, 1);
      }
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    document.getElementById("messages-box-deleted").style.display =  "block";
    this.setTimeout();
  }

  setTimeout = () => {
    setTimeout(this.removeMessage, (this.Timeout*1000));
  }

  removeMessage = () => {
    document.getElementById("messages-box-deleted").style.display = "none";
  }
}