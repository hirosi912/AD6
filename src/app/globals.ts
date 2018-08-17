import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    role: string = 'Assy';
    ctg: Array<any> =[
        {
            name: 'SMT',
            value: 'data SMT'          
        },
        {
            name: 'Assy',
            value: 'data Assy'
        }
    ];    
    // ApiUrl: string = document.location.origin + '/xPanelApi/';
    ApiUrl: string = 'http://10.50.197.218:1100/xPanelApi/';
    // ApiUrl: string = 'http://t1isp.wneweb.com.tw:1100/xPanelApi/';
}