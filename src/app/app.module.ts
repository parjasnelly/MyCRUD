import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { UserList } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

import { UserServer } from './user-server.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserList,
    FooterComponent,
    UserDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [UserServer],
  bootstrap: [AppComponent],
  entryComponents: [UserDialogComponent]

})
export class AppModule { }
