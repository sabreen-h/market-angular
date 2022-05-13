import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isOpen:boolean=false

  constructor (private as : AuthService) { }

  ngOnInit(): void {}
  toggleNav(){
    this.isOpen=!this.isOpen
  }
  
  logout(){
    this.as .logout()

  }

}
