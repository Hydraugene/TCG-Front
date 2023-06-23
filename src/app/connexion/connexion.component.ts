import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  erreur:boolean=false

  Username : string = "";
  Password : string = "";
  //user:UserI = <UserI>{};
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // checkId(){
  //   this.http.get<UserI>(`assets/ids/${this.id.id}@${this.id.passe}.json`).subscribe(
  //     retour => {console.log('Gut', retour); this.userService.user = retour; this.router.navigateByUrl('/intranet');},
  //     erreur => {console.log('Arhtung');},
  //   )

  // }
  login(){
    this.authService.login(this.Username, this.Password).then(result => this.erreur=result)
  }

}
