import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user : User | undefined

  constructor(private http: HttpClient, private readonly route:Router) { }
  
  public async test(){
    var token : string;
    token = "";

    // //await this.http.get(process.env['API_HOST'] + '/').subscribe((res) => {
    // await this.http.get('http://localhost:3000/').subscribe((res) => {
    //     //token = JSON.stringify(Object.values(res)[0]);
    //   //console.log(token);
    //   console.log(res)
    // });

    await this.http.get('http://localhost:3000', { responseType: 'text' }).subscribe(res => {
      console.log(res)
    });

    await this.http.get('http://localhost:3000/test')

    return token;

  }
  
  public async login(username: string, password : string){
    const url = 'http://localhost:3000/connect'; 
    const body = { username: username, password: password }; 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Set the content type of the request body
    });

    this.http.post(url, body, { headers })
      .subscribe(
        response => {
          console.log('API response:', response);
          this.user = response as User;
          if (this.user!=undefined) {
            this.route.navigate(['/']);          
          } else {
            this.route.navigateByUrl('/connexion')
          }
          console.log(this.user)
        },
        error => {
          console.error('API error:', error);
          // Handle the error here
        }
      );
    return this.user!=undefined
  }


  public deconnexion(){
    this.user = undefined
    //this.route.navigateByUrl('/')
  }

  public getUser(){
    return this.user
  }
}