import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  profile = PROFILE;

}