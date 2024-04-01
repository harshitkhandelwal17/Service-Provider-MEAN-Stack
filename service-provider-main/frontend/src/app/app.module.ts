import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProvidersModule } from './providers/providers.module';
import { ProviderService } from './service/provider.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProvidersModule,
    HttpClientModule,
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
