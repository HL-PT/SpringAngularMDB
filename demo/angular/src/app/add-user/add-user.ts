import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
	@Output() close = new EventEmitter<void>();
	@Output() saved = new EventEmitter<void>();
	
	// constructor(
	// 	private fb: FormBuilder, 
	// 	private userService: UserService
	// ) {
	// }
	private fb = inject(FormBuilder);
	private userService = inject(UserService);

	form = this.fb.group({
	  username: ['', Validators.required],
	  email: ['', [Validators.required, Validators.email]],
	});

	onSubmit(): void {
	  if (this.form.valid) {
		const formuser: User = {} as User;
		formuser.username = this.form.value.username!;
		formuser.email = this.form.value.email!;
		this.userService.addUser(formuser).subscribe({
		  next: () => this.saved.emit(),
      		error: err => alert(err.error?.message ?? 'Failed')
		});
	  }
	}

}
