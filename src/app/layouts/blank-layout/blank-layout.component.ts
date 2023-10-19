import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {

}
