import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular'
import { AuthButtonComponent } from './components/auth-button/auth-button.component'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,

    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
      audience: environment.audience,

      httpInterceptor: {
        allowedList: [
          {
            uri: '*',
            tokenOptions: {
              audience: environment.audience
            }
          }
        ]
      }
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
