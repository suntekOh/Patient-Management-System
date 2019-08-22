import { Component } from '@angular/core';
import { EmergencyAlertService } from './emergencyalert.service';
@Component({
    selector: 'emergencyalert',
    template: '<router-outlet></router-outlet>',
    providers: [EmergencyAlertService]
})
export class EmergencyAlertComponent { }
