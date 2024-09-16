import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[CommonModule , RouterLink,RouterLinkActive ],
  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private _Renderer2:Renderer2){}


  @ViewChild('nav') navElement!:ElementRef;
  @ViewChild('title') title!:ElementRef;
  @ViewChild('login') login!:ElementRef;

  @ViewChild('search') search!:ElementRef;
  @ViewChild('navIcon') navIcon!:ElementRef;




@HostListener('window:scroll')
onScroll(){
  if (window.scrollY>20) {
this._Renderer2.addClass(this.navElement.nativeElement,'bg-white')
this._Renderer2.addClass(this.title.nativeElement,'text-black')
this._Renderer2.removeClass(this.title.nativeElement,'text-white')
this._Renderer2.addClass(this.login.nativeElement,'text-black')
this._Renderer2.removeClass(this.login.nativeElement,'text-white')
this._Renderer2.addClass(this.search.nativeElement,'text-black')
this._Renderer2.removeClass(this.search.nativeElement,'text-white')

this._Renderer2.removeClass(this.navIcon.nativeElement,'nav-icon')



    
  }else{
this._Renderer2.removeClass(this.navElement.nativeElement,'bg-white')
this._Renderer2.removeClass(this.title.nativeElement,'text-black')
this._Renderer2.addClass(this.title.nativeElement,'text-white')
this._Renderer2.removeClass(this.login.nativeElement,'text-black')
this._Renderer2.addClass(this.login.nativeElement,'text-white')
this._Renderer2.removeClass(this.search.nativeElement,'text-black')
this._Renderer2.addClass(this.search.nativeElement,'text-white')
this._Renderer2.addClass(this.navIcon.nativeElement,'nav-icon')



  }

  
}

}
