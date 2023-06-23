import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {

  constructor(private readonly route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  trouveMatch(){
    if (this.authService.getUser()!=undefined) {
      this.route.navigate(['/gameroom']);    
    } else {
      this.route.navigate(['/connexion'])
    }
  }

  creerMatch(){
    this.route.navigateByUrl('/gameroom')
  }

}
