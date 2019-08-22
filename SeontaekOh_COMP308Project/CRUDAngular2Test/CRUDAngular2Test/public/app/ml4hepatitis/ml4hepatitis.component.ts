import { Component } from '@angular/core';
import { ML4HepatitisService } from './ml4hepatitis.service';
@Component({
    selector: 'ml4hepatitis',
    template: '<router-outlet></router-outlet>',
    providers: [ML4HepatitisService]
})
export class ML4HepatitisComponent { }
