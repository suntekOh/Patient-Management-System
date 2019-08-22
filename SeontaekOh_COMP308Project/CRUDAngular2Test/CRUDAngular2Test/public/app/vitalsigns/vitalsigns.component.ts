import { Component } from '@angular/core';
import { VitalSignsService } from './vitalsigns.service';
@Component({
    selector: 'vitalsigns',
    template: '<router-outlet></router-outlet>',
    providers: [VitalSignsService]
})
export class VitalSignsComponent { }
