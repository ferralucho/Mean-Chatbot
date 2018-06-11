import { Component, OnInit } from "@angular/core";
import { Coin } from "../../models/coin";
import { CryptoService } from "../crypto.service";

@Component({
    selector: 'app-dashboard-list',
    templateUrl: './dashboard-list.component.html',
    styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
    coins: Coin[];
    noDataMsg: string;
    fiat: string;
   constructor(private cryptoService: CryptoService) {
    this.noDataMsg = 'Select fiat currency to get started';
    this.cryptoService.filteredCoinsSubject.subscribe({
    next: (v) => this.updateCoins(v),
    });
    this.cryptoService.apiSubject.subscribe({
    next: (msg) => this.noDataMsg = msg,
    });
    this.cryptoService.fiatSubject.subscribe({
    next: (newValue) => this.fiat = newValue,
    });
    }
   updateCoins(coins: Coin[]) {
    this.coins = [];
    coins.forEach((coin) => this.coins.push(coin));
    }
    ngOnInit() {
    }
   }