import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './AddUser/add/add.component';
import { UpdateComponent } from './UpdateUser/update/update.component';
import { ShowComponent } from './ShowUser/show/show.component';
import { SidebarComponent } from "./ShowUser/Sidebar/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddComponent, UpdateComponent, ShowComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserInfo';
}
