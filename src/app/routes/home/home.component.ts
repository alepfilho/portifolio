import { Component } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.makeAnimation();
  }

  makeAnimation() {
    if (window.screen.width >= 650) {
      let my_photo_div = document.querySelector('.image-text .image');
      let my_photo = document.querySelector('.image-text .image img');
      gsap.to(my_photo_div, {
        scrollTrigger: '#inicio',
        width: '30em',
        delay: 2,
      });
      gsap.to(my_photo, {
        scrollTrigger: '#inicio',
        x: '0',
        delay: 2.3,
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#projetos',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          pin: true,
          once: true,
        },
      });
      const projetos_texto = document.querySelectorAll('#projetos h2');
      projetos_texto.forEach((texto, index) => {
        tl.from(texto, {
          scale: 0,
          y: -20,
          duration: 0.7,
          color: '#fff',
        });
        tl.to(texto, {
          scale: 1,
          y: -200,
          delay: 1,
          duration: 0.7,
          color: '#fff',
        });
      });

      // Animação BG
      ScrollTrigger.create({
        trigger: '.pin-spacer',
        start: 'top center',
        end: 'bottom center',
        markers: false,
        onEnter: () =>
          gsap.to('.pin-spacer', {
            backgroundColor: '#4fa682',
            duration: 1.4,
          }),
      });

      const alguns_projetos = document.querySelectorAll(
        '#list-projetos .animated-card'
      );
      let pj = gsap.timeline({
        scrollTrigger: {
          trigger: '#list-projetos',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          once: true,
        },
      });
      alguns_projetos.forEach((projeto, index) => {
        if (index / 2 == 0) {
          pj.from(projeto, {
            x: '5em',
            y: '-3em',
            opacity: 0,
            duration: 0.5,
          });
        } else {
          pj.from(projeto, {
            x: '-5em',
            y: '-3em',
            opacity: 0,
            duration: 0.5,
          });
        }
      });
    } else {
      console.log('oi');
      let my_photo_div = document.querySelector('.image-text .image');
      let my_photo = document.querySelector('.image-text .image img');
      gsap.to(my_photo_div, {
        scrollTrigger: '#inicio',
        width: '20em',
        delay: 2,
      });
      gsap.to(my_photo, {
        scrollTrigger: '#inicio',
        x: '0',
        delay: 2.3,
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#projetos',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          pin: true,
          once: true,
        },
        duration: 2,
      });
      const projetos_texto = document.querySelectorAll('#projetos h2');
      projetos_texto.forEach((texto, index) => {
        tl.from(texto, {
          scale: 0,
          y: -20,
          color: '#fff',
        });
        tl.to(texto, {
          scale: 1,
          y: -130,
          color: '#fff',
        });
      });

      // Animação BG
      ScrollTrigger.create({
        trigger: '.pin-spacer',
        start: 'top center',
        end: 'bottom center',
        markers: false,
        onEnter: () =>
          gsap.to('.pin-spacer', {
            backgroundColor: '#4fa682',
            duration: 1.4,
            delay: 1,
          }),
      });

      const alguns_projetos = document.querySelectorAll(
        '#list-projetos .animated-card'
      );
      let pj = gsap.timeline({
        scrollTrigger: {
          trigger: '#list-projetos',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          once: true,
        },
      });
      alguns_projetos.forEach((projeto, index) => {
        if (index / 2 == 0) {
          pj.from(projeto, {
            x: '5em',
            opacity: 0,
            duration: 0.5,
          });
        } else {
          pj.from(projeto, {
            x: '-5em',
            opacity: 0,
            duration: 0.5,
          });
        }
      });
    }
  }
}
