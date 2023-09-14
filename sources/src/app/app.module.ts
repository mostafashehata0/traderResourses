import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TraderNameComponent } from './components/trader-name/trader-name.component';
import { FormsModule } from '@angular/forms';
import { WorkingTimeComponent } from './components/working-time/working-time.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TraderNameComponent,
    WorkingTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
