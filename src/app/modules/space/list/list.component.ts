import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../../service/space.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  spaces: any;
  colors = ['success', 'warning', 'info', 'danger', 'primary'];

  constructor(private spaceService: SpaceService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.spaceService.getSpaces().subscribe(data => {
      this.spaces = data;
    });
  }

  safeURL(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
