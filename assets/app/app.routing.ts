import { DashboardGeneralComponent } from './crypto-dashboard/dashboard-general.component';
import { ChatInputComponent } from './chat/chat-input.component';
import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/chatbot', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'chatbot', component: ChatInputComponent },
    { path: 'cryptodashboard', component: DashboardGeneralComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);