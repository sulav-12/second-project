import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
