import { Directive, OnInit, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';


@Directive({
    selector:'[app-basic]'
})
export class BasicDirective implements OnInit{
@HostBinding('style.backgroundColor') backGroundcolor:string='transparent';
    constructor(private element:ElementRef,
        private renderer:Renderer){}
    ngOnInit(): void {
    
    }
    @HostListener('mouseenter') mouseOver(event:Event){
        // this.renderer.setElementStyle(this.element.nativeElement,'background-color','green'); 
    this.backGroundcolor='red';
    }
    @HostListener('mouseleave') mouseLeave(event:Event){
        // this.renderer.setElementStyle(this.element.nativeElement,'background-color','transparent'); 
    this.backGroundcolor='orange';
    }

}