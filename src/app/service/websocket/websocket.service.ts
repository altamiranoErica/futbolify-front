import { Injectable } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import { Observable } from '../../../../node_modules/@angular/cli/node_modules/rxjs';
import { Frame } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  finishPoll_webSocket: Observable<any>;
  finishPoll_Observable: Observable<any>;

  startPoll_webSocket: Observable<any>;
  startPoll_Observable: Observable<any>;

  constructor() {
    this.finishPoll_webSocket = Observable.create(websocketSubscriber => {
      let socket = new SockJS(environment.socketServer);
      let stompClient = Stomp.over(socket);

      stompClient.connect({}, (frame: Frame) => {
        this.finishPoll_Observable = Observable.create(responseSubscriber => {
          let subscription = stompClient.subscribe('/poll/finish_event', (message: Frame) => {
            responseSubscriber.next(JSON.parse(message.body));
          });
          return () => {
            subscription.unsubscribe();
          };
        });

        websocketSubscriber.next({});
      });

      return () => {
        stompClient.disconnect();
      }
    });

    this.startPoll_webSocket = Observable.create(websocketSubscriber => {
      let socket = new SockJS(environment.socketServer);
      let stompClient = Stomp.over(socket);

      stompClient.connect({}, (frame: Frame) => {
        this.startPoll_Observable = Observable.create(responseSubscriber => {
          let subscription = stompClient.subscribe('/poll/start_event', (message: Frame) => {
            responseSubscriber.next(JSON.parse(message.body));
          });
          return () => {
            subscription.unsubscribe();
          };
        });

        websocketSubscriber.next({});
      });

      return () => {
        stompClient.disconnect();
      }
    });
  }
}
