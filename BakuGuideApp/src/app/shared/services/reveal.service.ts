import { Injectable } from '@angular/core';
@Injectable()
export class RevealService {
  constructor() {
    window.addEventListener('scroll', this.reveal);
  }
  reveal(): void {
    const reveals: NodeListOf<HTMLElement> =
      document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight: number = window.innerHeight;
      let elementTop: number = reveals[i].getBoundingClientRect().top;
      const elementVisible: number = 20;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
}
