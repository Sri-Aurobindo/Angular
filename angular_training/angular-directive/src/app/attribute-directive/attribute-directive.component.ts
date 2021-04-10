import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
styleData={'color':'blue','font-size':'40px'}
f1=true
f2=false
  constructor() { }

  ngOnInit(): void {
  }
  change()
  {
    this.f1=!this.f1
    this.f2=!this.f2
  }

}
