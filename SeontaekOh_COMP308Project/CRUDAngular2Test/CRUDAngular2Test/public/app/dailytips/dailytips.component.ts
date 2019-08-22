import { Component } from '@angular/core';
import { DailyTipsService } from './dailytips.service';
@Component({
    selector: 'dailytips',
    template: '<router-outlet></router-outlet>',
    providers: [DailyTipsService]
})
export class DailyTipsComponent { }
