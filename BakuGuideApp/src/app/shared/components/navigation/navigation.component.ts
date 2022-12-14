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
  a: boolean = true;
  public toggleMenu(b: boolean): void {
    const menuList = document.querySelector('.nav__menu-list');
    if (b) {
      menuList?.classList.add('show');
      this.a = false;
    } else {
      menuList?.classList.remove('show');
      this.a = true;
    }
  }

  ngOnInit(): void {}
}
