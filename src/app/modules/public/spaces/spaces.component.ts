import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpaceService } from '../../../service/space/space.service';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit {

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
