import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-timeout',
  templateUrl: './message-timeout.component.html',
  styleUrls: ['./message-timeout.component.css']
})
export class MessageTimeoutComponent implements OnInit {

  @Input() time: number = 30;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  setTime = (newTime: number) => {
    if (newTime) {
      this.time = newTime;
      this.change.emit(this.time);
    }
  }

}
