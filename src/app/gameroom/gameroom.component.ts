import { Component, OnInit } from '@angular/core';
import { Message, WebsocketService } from "../services/websocket.service";

@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {
  title = 'socketrv';
  content : string = '';
  received : Message[] = [];
  sent : any[] = [];

  constructor(private WebsocketService: WebsocketService) {
    WebsocketService.messages.subscribe(msg => {
      this.received.push(msg);
      console.log("thom est là : "+this.received)
      console.log("Response from websocket: " + msg);
    });
  }

  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;
    const payload = { event: 'testping', message: message}
    this.sent.push(message);  
    this.WebsocketService.messages.next(message);
  }
}
