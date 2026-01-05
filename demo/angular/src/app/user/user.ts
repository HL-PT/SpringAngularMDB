import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class AppUser implements OnInit {
	  users: User[] = [];
	  constructor(private userService: UserService) {}

	  ngOnInit(): void {
		this.userService.getUsers().subscribe((data: User[]) => {
		  this.users = data;
		});
	  }
	  deleteUser(id: number): void {
		this.userService.deleteUser(id).subscribe(() => {
		  this.users = this.users.filter(user => user.id !== id);
		});
	  }
}
