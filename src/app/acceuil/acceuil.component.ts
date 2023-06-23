import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  title = 'Défaut';
  constructor(private http: HttpClient, private authService:AuthService) { }
  user = this.authService.getUser()

  ngOnInit(): void {
  }

  public testfn(){
    this.apiPing()
  }

  public async apiPing(){
    await this.http.get('http://localhost:3000', { responseType: 'text' }).subscribe(res => {
      console.log(res)
      this.title = res
    });
  }

}
