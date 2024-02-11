import { Component } from '@angular/core';
import { PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };
  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'User data', action: () => console.log("09") },
    { icon: 'po-icon-company', label: 'Company data', action: () => console.log("09") },
    { icon: 'po-icon-settings', label: 'Settings', action: () => console.log("09") },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => console.log("09") }
  ];
  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: () => console.log("09") },
    { label: 'Finalize cash register', action: () => console.log("09") },
    { label: 'Cash register options', action: () => console.log("09") }
  ];
  title: string = 'PO Toolbar Logged';
}
