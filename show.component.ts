import { Component, NgModule, OnInit } from '@angular/core';
import { Users } from './Users';
import { ServicesApiService } from '../services-api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
  userList:Users[]=[]
  searchText: string = '';
  filteredUserList: Users[] = [];
  constructor(private AdminService:ServicesApiService,private _router: Router){
    console.log("constructor.....");
  }
  ngOnInit(): void {
    console.log("oninit..");
    this.AdminService.getUser().subscribe((data:any)=>{
      console.log(data);
      this.userList=data;
      this.filteredUserList = data;
      console.log(this.userList);

    })
  }
  filterUsers() {
    const search = this.searchText.toLowerCase();
    this.filteredUserList = this.userList.filter((user) =>
      user.firstName.toLowerCase().includes(search) || 
      user.lastName.toLowerCase().includes(search)
    );
  }

  updateUser(user: any) {
    console.log('Navigating to update user:', user);
    this._router.navigate(['/update'], { state: { user } });
  }
  loadUser() {
    this.AdminService.getUser().subscribe(
      (data: any) => {
        this.userList = data; 
        this.filteredUserList = data; 
      },
      (error) => {
        console.error("Error loading users", error);
      }
    );
  }
  deleteUser(id: number) {
    console.log("Deleting user with ID:", id);
    this.AdminService.deleteUser(id).subscribe(
      (response) => {
        console.log("Delete response:", response);
        alert("User deleted successfully");
        this.loadUser();
      },
      (error) => {
        console.error("Error deleting user:", error);
        alert(`Failed to delete user: ${error.message}`);
      }
    );
  }
  
}
