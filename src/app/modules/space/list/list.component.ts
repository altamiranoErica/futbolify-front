import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../../service/space/space.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  spaces: any;

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
    this.spaceService.getCleanSpaces().subscribe(data => {
      this.spaces = data;
    });
  }

}
