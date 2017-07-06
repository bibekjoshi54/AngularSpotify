import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { AboutComponent } from 'app/about/about.component';
import { AppComponent } from 'app/app.component';
import { SearchComponent } from "app/search/search.component";


@NgModule({
  imports: [
  RouterModule.forRoot([
{path: 'about', component: AboutComponent},
{path : '', component: SearchComponent},
{path: '**', redirectTo: '', pathMatch: 'full'}
  ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ApproutingModule { }
