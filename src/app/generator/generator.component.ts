import { Component, OnInit, Input} from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Uid } from '../classes/uid';
// import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  Uid: Uid = {
    uids: ''
  };

  @Input() Timeout: number;

  timeout:number = this.Timeout * 1000;
  UidArray = [];
  time: number = this.Timeout * 1000;

  constructor() { }

  ngOnInit() {
  }

  getUid = (Uid: Uid) => {
    let uid = UUID.UUID();
    if (this.UidArray.length >= 10) {
      document.getElementById("messages-box-warning").style.display = "block";
      this.setTimeoutWarning();
    } else {
      this.UidArray.push(uid);
      document.getElementById("messages-box-success").style.display = "block";
      this.setTimeout();
    }
  }
  
  setTimeout = () => {
    setTimeout(this.removeMessage, (this.Timeout*1000));
  }

  removeMessage = () => {
    document.getElementById("messages-box-success").style.display = "none";
  }

  setTimeoutWarning = () => {
    setTimeout(this.removeMessageWarning, (this.Timeout*1000));
  }

  removeMessageWarning = () => {
    document.getElementById("messages-box-warning").style.display = "none";
  }
  
}
