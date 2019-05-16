import { Directive,
   Renderer2,
    OnInit, ElementRef,
     HostListener, HostBinding,
      Input } from '@angular/core';


@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{
  @Input() defaultColor:string;
  @Input() highlightColor:string;

  @HostBinding('style.backgroundColor') backgroundColor:string;
  ngOnInit(): void {
    // this.render.setStyle(this.ele.nativeElement,'background-color','green');
  this.backgroundColor=this.defaultColor;
  }

  constructor(private ele:ElementRef,private render:Renderer2) 
  {}

  @HostListener('mouseenter') mouseOver(eventData:Event){
    // this.render.setStyle(this.ele.nativeElement,'background-color','green');
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(eventData:Event){
    // this.render.setStyle(this.ele.nativeElement,'background-color','transparent');
this.backgroundColor=this.defaultColor;
  }
}
