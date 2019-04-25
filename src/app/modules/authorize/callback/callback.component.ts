import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  template: `<h1>CALLBACK COMPONENT</h1>
              <p>Code: {{code}}</p>`
})
export class CallbackComponent implements OnInit{

  code: string;

  constructor(private route: ActivatedRoute){ }

  ngOnInit(){
    this.code = this.route.snapshot.queryParamMap.get("code");
    debugger;
  }

}
