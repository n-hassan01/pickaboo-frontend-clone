import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  imageChange(){

    var src: any = this.el.nativeElement.src;
    var prev: any = document.getElementById('preview');
    prev.src = src;

    var imgSlide = document.getElementsByClassName('img-slide');
    for(let i=0; i<imgSlide.length; i++){
      imgSlide[i].classList.remove('active');
    }

    this.el.nativeElement.parentElement.classList.add('active');
    
  }

}
