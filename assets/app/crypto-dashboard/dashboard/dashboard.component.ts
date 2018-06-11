import { CryptoService } from './../crypto.service';
import { Component } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    styleUrls: ['./dashboard.component.css'],
    templateUrl: './dashboard.component.html',
    providers: [CryptoService]
})
export class DashboardComponent {

    constructor() {}


}