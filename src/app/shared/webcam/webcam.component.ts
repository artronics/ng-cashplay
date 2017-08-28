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
  @Input() dataUri: string;

  @Output() image: EventEmitter<string> = new EventEmitter();

  isCameraOn = false;

  constructor() {
  }

  ngOnInit() {
    const options: any = this.options;

    options.image_format = 'jpeg';
    options.force_flash = false;
    options.jpeg_quality = 90;
    Webcam.set(options);

  }

  ngOnDestroy() {
    Webcam.reset();
  }

  shot() {
    if (this.isCameraOn) {
      Webcam.snap(dataUri => {
        this.image.emit(dataUri);
        this.dataUri = dataUri;
        Webcam.reset();
        this.isCameraOn = false;
      });

      return;
    } else {
      Webcam.attach('my_camera');
      this.isCameraOn = true;
    }
  }

}
