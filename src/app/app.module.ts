import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { routing } from './class.routes';
import { HttpServiceService } from './http-service.service';
import { SampleDirectiveDirective } from './sample-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChildComponentComponent,
    HomeChildComponent,
    SampleDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
