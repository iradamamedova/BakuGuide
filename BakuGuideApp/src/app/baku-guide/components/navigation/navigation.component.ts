import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {
    document.onscroll = function () {
      document.documentElement.scrollTop > 400
        ? document.getElementById('navigation')?.classList.add('sticky')
        : document.getElementById('navigation')?.classList.remove('sticky');
    };
  }

  ngOnInit(): void {}
}
