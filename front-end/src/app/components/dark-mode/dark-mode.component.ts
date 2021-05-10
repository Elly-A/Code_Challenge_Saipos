import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit, AfterViewInit {
  isDarkMode = false;

  constructor() { }

  ngOnInit(): void {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDark) {
      this.isDarkMode = true;
      document.querySelector('[main-id]')
        .id = 'mat-app-dark-background';
    }
  }

  ngAfterViewInit(): void {
    this.isDarkMode ?
      document.getElementById('mat-slide-input').click() :
      '';

  }

  onChange(e: MatSlideToggleChange): void {
    const body = document.querySelector('[main-id]');

    if (e.checked) {
      body.id = 'mat-app-dark-background';
      this.isDarkMode = true;
    } else {
      body.id = '';
      this.isDarkMode = false;
    }
  }

}
