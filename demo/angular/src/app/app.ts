import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppUser } from './user/user';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
