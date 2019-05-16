import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(condition:boolean){
if(!condition){
  this.VcRef.createEmbeddedView(this.templateRef);
}
else{
  this.VcRef.clear();
}
}
  constructor(private templateRef:TemplateRef<any>,private VcRef:ViewContainerRef)
   { }

} 
