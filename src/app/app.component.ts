import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>hello from inline template</h1>
  // <!-- <br> -->
  // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere asperiores, nihil numquam architecto doloribus commodi ab dolor et? Quam?</p>
  
  // `,
  styleUrls: ['./app.component.less']

  // styles:[`h1{color:green};p{color:green};button{background:blue;color:white;}`],
  
})
export class AppComponent {
  title = 'angular-project01';
  // role="Admin";
}
