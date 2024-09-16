import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
constructor(private _Router:Router){}

  goHome(){
    this._Router.navigate(["/home"])
    console.log("hh");
    
  }
}
