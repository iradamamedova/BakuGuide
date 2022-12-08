import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {
    document.onscroll = function () {
      document.documentElement.scrollTop > 300
        ? document.getElementById('navigation')?.classList.add('sticky')
        : document.getElementById('navigation')?.classList.remove('sticky');
    };
  }

  ngOnInit(): void {}
}
