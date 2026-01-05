import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { AddUser } from '../add-user/add-user';

@Component({
  selector: 'app-user',
  imports: [CommonModule, AddUser],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class AppUser implements OnInit {
	  users: User[] = [];
	  showAddUser = false;
	  constructor(private userService: UserService) {}

	  ngOnInit(): void {
		this.userService.getUsers().subscribe((data: User[]) => {
		  this.users = data;
		});
	  }
	  openAddUser(): void {
		this.showAddUser = true;
	  }
	  closeAddUser(): void {
		this.showAddUser = false;
	  }
	  onUserSaved(): void {
		this.showAddUser = false;
		this.ngOnInit();
	  }
	  deleteUser(id: number): void {
		this.userService.deleteUser(id).subscribe(() => {
		  this.users = this.users.filter(user => user.id !== id);
		});
	  }
}
