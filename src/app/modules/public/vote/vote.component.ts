import { Component, Input, OnInit } from '@angular/core';
import { PollService } from '../../../service/poll/poll.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() poll: any;
  selectedTrack: any;

  constructor(protected pollService: PollService) {
    this.selectedTrack = {}
  }

  ngOnInit() {
  }

  submit(){
    debugger;
    this.pollService.vote(this.poll, this.selectedTrack).subscribe(
      data => {

      }
    )
  }
}
