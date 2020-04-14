import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ClientModule } from './client/client-routing/client.module';
import { AdminModule } from './admin/admin-routing/admin.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { BlogHomeComponent } from './client/blog-home/blog-home.component';
import { NavbarComponent } from './client/shared/navbar/navbar.component';
import { FooterComponent } from './client/shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    ClientModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
