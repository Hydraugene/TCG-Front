import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WebsocketService } from '../services/websocket.service';
import { Router } from '@angular/router';
import { User } from '../modeles/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public user : User | undefined

  constructor(private authService: AuthService, private webSocketService: WebsocketService, private readonly route:Router) {
    this.user = this.authService.getUser();
 }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  // public deconnexion(){
  //   console.log("toto aime")
  //   if (this.authService.getUser()==undefined) {
  //     this.coDeco = 'Deconnexion'
  //     this.route.navigateByUrl('/connexion')
  //   } else {
  //     this.coDeco = 'Connexion'
  //     this.authService.deconnexion()
  //   }
  // }
  public deconnexion(){
    console.log("tata")
    this.authService.deconnexion()
    this.user = this.authService.getUser();
  }

  // public goGame(){
  //   if (this.webSocketService.inGame) {
  //     this.route.navigateByUrl('/gameroom')
  //   } else {
  //     this.route.navigateByUrl('/matchmaking')
  //   }
  // }

}
