import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
//on va faire linjection des dependances ds le constructeur
  constructor( private el : ElementRef , private re:Renderer2) {
    console.log(this.el.nativeElement)
    //nativeElement pour ns donner
this.re.setStyle(this.el.nativeElement,'font-size','25px')
}
}