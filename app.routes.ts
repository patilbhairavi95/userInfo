import { Routes } from '@angular/router';
import { AddComponent } from './AddUser/add/add.component';
import { UpdateComponent } from './UpdateUser/update/update.component';
import { SidebarComponent } from './ShowUser/Sidebar/sidebar/sidebar.component';
import { ShowComponent } from './ShowUser/show/show.component';

export const routes: Routes = [
    {path:"add" , component:AddComponent},
    {path:"update" ,component:UpdateComponent},
    {path:"sidebar" , component:SidebarComponent },
    {path:"show",component:ShowComponent}

];
