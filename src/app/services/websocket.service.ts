import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const CHAT_URL = "ws://localhost:3000";

export interface Message {
  source: string;
  content: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public inGame: boolean = false;



  // private subject: AnonymousSubject<MessageEvent>;
  // public messages: Subject<Message>;

  // constructor() {
  //     this.messages = <Subject<Message>>this.connect(CHAT_URL).pipe(
  //         map(
  //             (response: MessageEvent): Message => {
  //                 console.log(response.data);
  //                 let data = JSON.parse(response.data)
  //                 return data;
  //             }
  //         )
  //     );
  // }

  // public connect(url): AnonymousSubject<MessageEvent> {
  //     if (!this.subject) {
  //         this.subject = this.create(url);
  //         console.log("Successfully connected: " + url);
  //     }
  //     return this.subject;
  // }

  // private create(url): AnonymousSubject<MessageEvent> {
  //     let ws = new WebSocket(url);
  //     let observable = new Observable((obs: Observer<MessageEvent>) => {
  //         ws.onmessage = obs.next.bind(obs);
  //         ws.onerror = obs.error.bind(obs);
  //         ws.onclose = obs.complete.bind(obs);
  //         return ws.close.bind(ws);
  //     });
  //     let observer = {
  //         error: null,
  //         complete: null,
  //         next: (data: Object) => {
  //             console.log('Message sent to websocket: ', data);
  //             if (ws.readyState === WebSocket.OPEN) {
  //                 ws.send(JSON.stringify(data));
  //             }
  //         }
  //     };
  //     return new AnonymousSubject<MessageEvent>(observer, observable);
  // }


  private subject: AnonymousSubject<MessageEvent> | undefined;
  public messages: Subject<Message>;
  private nomEventEnCours: string |undefined;

  constructor() {
      this.messages = <Subject<Message>>this.connect(CHAT_URL).pipe(
          map(
              (response: MessageEvent): Message => {
                  console.log("reception :"+response.data);
                  let data = JSON.parse(response.data)
                  return data;
              }
          )
      );
  }

  public setEvent(nom: string){
    this.nomEventEnCours = nom;
  }

  public connect(url: string | URL): AnonymousSubject<MessageEvent> {
      if (!this.subject) {
          this.subject = this.create(url);
          console.log("Successfully connected: " + url);
      }
      return this.subject;
  }

  private handleError(err: any): void {
    console.error('An error occurred :', err);
    // Perform error handling or other actions
  }

  private completed(): void {
    console.log('done')
  }

  

  private create(url: string | URL): AnonymousSubject<MessageEvent> {
      let ws = new WebSocket(url);
      let observable = new Observable((obs: Observer<MessageEvent>) => {
          ws.onmessage = obs.next.bind(obs);
          ws.onerror = obs.error.bind(obs);
          ws.onclose = obs.complete.bind(obs);
          return ws.close.bind(ws);
      });
      let observer: Observer<MessageEvent<any>> = {
          error: this.handleError,
          complete: this.completed,
          next: (data: Object) => {
              const payload = { event: this.nomEventEnCours, message: data}
              // const payload = data
              console.log('Message sent to websocket: ', payload);
              if (ws.readyState === WebSocket.OPEN) {
                console.log("string expédié :"+JSON.stringify(payload));
                  ws.send(JSON.stringify(payload));
              }
          }
      };
      return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}
