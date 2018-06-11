import { CryptoService } from './crypto.service';
import { DashboardGeneralComponent } from './dashboard-general.component';
import { DashboardListComponent } from './list/dashboard-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
    declarations: [
    DashboardComponent,
    DashboardListComponent,
    ListCardComponent,
    SearchFilterComponent,    
    DashboardGeneralComponent
    ],
    imports: [
        CommonModule,    
        FormsModule,
        MultiselectDropdownModule 
    ],
    providers: [
        CryptoService
    ]
})
export class CryptoDashboardModule {

}