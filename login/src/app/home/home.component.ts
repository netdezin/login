import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { user } from '../models/user';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: user[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  async login(form: NgForm) { 
   
    this.loading = true;
   
   
    const { email } = form.value;
   
    
    
    let resp;
    try {
      //using Firebase Auth in the actual project

      //if authenicated via Firebase then I save the user's email address
      sessionStorage.setItem('userEmail', email);

      this.usersService.getUsers()
        .subscribe((result: user[]) => (this.users = result));     


      

    } catch (error) {
      
    }
    this.loading = false;

  }

}
