import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MoviedataService } from 'src/app/moviedata.service';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-movieplayer',
  templateUrl: './movieplayer.page.html',
  styleUrls: ['./movieplayer.page.scss'],
})

export class MovieplayerPage implements OnInit {

  date = new Date();
  public data = [];
  constructor(public http: HttpClient, public dataservice: MoviedataService , public actrouter: ActivatedRoute,
              private streamingMeadia: StreamingMedia ) { }
  title: any;
  time = 0;


  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
    this.actrouter.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.title = params['title'];
      console.log(this.title);
    });
  }

  startVideo() {
    const options: StreamingVideoOptions = {
      successCallback: () => { console.log(); },
      errorCallback: () => { console.log(); },
      orientation: 'landscape'
    };
    this.streamingMeadia.playVideo('http://techslides.com/demos/sample-videos/small.mp4', options);
  }
  startAudio() {
    const options: StreamingAudioOptions = {
      successCallback: () => { console.log(); },
      errorCallback: () => { console.log(); },
      initFullscreen: false
    };
    this.streamingMeadia.playAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', options);
  }
  stopAudio() {
    this.streamingMeadia.stopAudio();
  }
  onForward() {
    this.time = this.time + 10;
  }
  onBackward() {
    if ( this.time >= 10) {
      this.time = this.time - 10;
    } else if (this.time < 10) {
      this.time = 0;
      console.log(this.time);
    }
  }
}
