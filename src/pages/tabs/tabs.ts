import { Component } from '@angular/core';

import { Tab1Page, Tab2Page, Tab3Page } from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Tab1Page
  tab2Root = Tab2Page
  tab3Root = Tab3Page

  constructor() { }

}
