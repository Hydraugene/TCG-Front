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
  received : any[] = [];
  sent : any[] = [];
  public nbCartesEnMain:number =0;
  public tourAdverse: boolean = true
  public partieCommence: boolean = false
  monaction: boolean = false

  constructor(private WebsocketService: WebsocketService) {
    WebsocketService.messages.subscribe(msg => {
      this.msgReader(msg)
      console.log("thom est là : "+this.received)
      console.log("Response from websocket: " + msg);
    });
  }

  msgReader(msg: Message){
    switch (msg) {
      case 'Start' as any:
        this.partieCommence=true
        this.received.push('La partie a commencé');
        this.nbCartesEnMain=7;
        break;
      case 'Pioche' as any:
        this.received.push(this.monaction ? 'Vous avez pioché une carte' : 'Votre adversaire a pioché une carte');
        break;
      case 'Jouer' as any:
        this.received.push(this.monaction ? 'Vous avez joué une carte' : 'Votre adversaire a joué une carte')
        break;
      case 'tourFini' as any:
        this.received.push('Fin du tour')
        this.tourAdverse = !this.tourAdverse
        break
      default:
        break;
    }
    this.monaction = false

  }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  sendMsg(event:string) {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;
    this.WebsocketService.setEvent(event)
    this.sent.push(message);  
    this.WebsocketService.messages.next(message);
  }

  lancerPartie(){
    // let message = {
    //   source:'localhost',
    //   content: 'startGame'
    // }
    this.tourAdverse=false
    this.sendMsg('startGame')
    // this.sent.push(message)
    // this.WebsocketService.messages.next(message);
    this.monaction = true
  }

  piocher(){
    this.nbCartesEnMain++;
    this.sendMsg('pioche')
    this.monaction=true
  }

  jouer(){
    this.nbCartesEnMain--;
    this.sendMsg('jouer')
    this.monaction=true
  }

  finTour(){
    this.sendMsg('finTour');
  }
}
