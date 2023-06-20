import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Défaut';

  public token: string;

  constructor(private http: HttpClient) {
    this.token = "";
   }

  public testfn(){
    this.login()
  }

  public async login(){
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
      this.title = res
    });

    await this.http.get('http://localhost:3000/test')

    return token;
  }

}
