import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  template: `<p>Loading...</p>`
})
export class CallbackComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private router: Router){ }

  ngOnInit(){
    const code = this.route.snapshot.queryParamMap.get("code");
    if(code) {
      this.router.navigate(["/dashboard/venue/add", { code: code }])
    } else {
      this.router.navigate(["/dashboard/venue/list" ])
    }
  }

}
