import { Component, Input, OnInit } from '@angular/core';
import { PollService } from '../../../service/poll/poll.service';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() poll: any;
  selectedTrack: any;
  showResults: boolean = false;
  totalVotes: number;
  expirationTime: number;

  constructor(protected pollService: PollService) {
    this.selectedTrack = {}
  }

  ngOnInit() {
    this.expirationTime = this.poll.expirationTime;
    // this.startTimer();
  }

  // interval: any;
  // startTimer() {
  //   this.interval = setInterval(() => {
  //     if(this.expirationTime > 0) {
  //       this.expirationTime = this.expirationTime - 1000;
  //     } else {
  //       this.interval = null;
  //     }
  //   },1000)
  // }

  submit(track){
    this.pollService.vote(this.poll, track).subscribe(
      (data: any) => {
        this.showResults = true;
        this.poll.tracks = data.tracks;
        this.totalVotes = data.tracks.map(t => t.votesCount).reduce((a, b) => a + b, 0);
      }
    )
  }
}
