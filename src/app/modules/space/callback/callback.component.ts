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
    this.router.navigate(["/space/add", { code: code } ])
  }

}
