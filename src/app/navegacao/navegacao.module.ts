import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Placement as PopperPlacement, Options } from '@popperjs/core';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class NavegacaoModule { }
