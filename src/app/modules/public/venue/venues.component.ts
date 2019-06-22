import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VenueService } from '../../../service/venue/venue.service';
import { PollService } from '../../../service/poll/poll.service';
import { Observable } from '../../../../../node_modules/@angular/cli/node_modules/rxjs';
import { Frame } from '@stomp/stompjs';
import { WebsocketService } from '../../../service/websocket/websocket.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: any;
  colors = ['success', 'warning', 'info', 'danger', 'primary'];
  selectedPoll: any;

  constructor(private venueService: VenueService,
              private pollService: PollService,
              private websocketService: WebsocketService,
              private sanitizer: DomSanitizer) {
    this.selectedPoll = { };

    this.websocketService.finishPoll_webSocket.subscribe((result) => {
      this.websocketService.finishPoll_Observable.subscribe((response) => {
        if(response) {
          let venue = this.venues.find(v => v.id === response.venueID);
          venue.poll = null;
        }
      })
    });

    this.websocketService.startPoll_webSocket.subscribe((result) => {
      this.websocketService.startPoll_Observable.subscribe((response) => {
        if(response) {
          let venue = this.venues.find(v => v.id === response.venueID);
          venue.poll = response;
        }
      })
    });
  }

  ngOnInit() {
    this.venueService.getSpaces().subscribe(
      (_venues: any[]) => {
      this.pollService.getAllActives().subscribe(
        (_polls: any[]) => {
          _venues.forEach(v => v.poll = _polls.find(poll => poll.venueID === v.id));

          this.venues = _venues;
        }
      )
    });
    // this.initializeWebSocketConnection();
  }

  safeURL(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private stompClient;

  // initializeWebSocketConnection(){
  //   let ws = new SockJS('http://localhost:8080/socket');
  //   this.stompClient = Stomp.over(ws);
  //   let that = this;
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe("/poll/finish_event", (message) => {
  //       if(message.body) {
  //         const poll = JSON.parse(message.body);
  //         let venue = that.venues.find(v => v.id === poll.venueID);
  //         venue.poll = null;
  //       }
  //     });
  //   });
  // }

}
