import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as Webcam from 'webcamjs';

@Component({
  selector: 'art-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit, OnDestroy {
  @Input() options: {
    width: number;
    height: number;
    dest_width: number;
    dest_height: number;
  } = {width: 320, height: 240, dest_height: 480, dest_width: 640};

  @Output() image: EventEmitter<string> = new EventEmitter();
  video = <any>document.getElementsByTagName('video')[0];
  canvas = <any>document.getElementsByTagName('canvas')[0];

  success = (stream: MediaStream) => {
  };
  onError = (err) => {
  };

  constructor() {
  }

  ngOnInit() {
    const options: any = this.options;

    options.image_format = 'jpeg';
    options.force_flash = false;
    options.jpeg_quality = 90;
    Webcam.set(options);

    Webcam.attach('my_camera');
  }

  ngOnDestroy() {
    Webcam.reset();
  }

  shot() {
    Webcam.unfreeze();
    Webcam.snap(dataUri => {
      this.image.emit(dataUri);
    });
    Webcam.freeze();
  }

}
