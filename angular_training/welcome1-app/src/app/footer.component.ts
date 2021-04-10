import { Component } from '@angular/core';

@Component({
selector:"footer-app",
template:`
<div>
footer of this page {{msg}}
</div>
`,
styles:["div{color:blue}"]
})

export class FooterComponent{
    msg:string = "message from footer component"
} 