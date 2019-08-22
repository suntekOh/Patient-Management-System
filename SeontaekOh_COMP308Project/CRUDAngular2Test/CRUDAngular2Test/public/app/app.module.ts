import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { ArticlesModule } from './articles/articles.module';
import { VitalSignsModule } from './vitalsigns/vitalsigns.module';
import { EmergencyAlertModule } from './emergencyalert/emergencyalert.module';
import { DailyTipsModule } from './dailytips/dailytips.module';
import { ML4HepatitisModule } from './ml4hepatitis/ml4hepatitis.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AuthenticationModule,
        HomeModule,
        ArticlesModule,
        VitalSignsModule,
        EmergencyAlertModule,
        DailyTipsModule,
        ML4HepatitisModule,
        RouterModule.forRoot(AppRoutes),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

