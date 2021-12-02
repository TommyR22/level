import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'level';
  Xvalue: any;

  ngOnInit(): void {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", (event) => {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        // gamma: left to right
        var leftToRight = event.gamma;
        // beta: front back motion
        var frontToBack = event.beta;

        this.handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
      }, true);
    }
  }

  handleOrientationEvent(frontToBack: any, leftToRight: any, rotateDegrees: any) {
    console.log(`X-axis (β): ${frontToBack}`);
    console.log(`Y-axis (γ): ${leftToRight}`);
    console.log(`Z-axis (α): ${rotateDegrees}`);
    this.Xvalue = frontToBack;
    if (this.Xvalue === 0 && "vibrate" in navigator) {
      window.navigator.vibrate(200);
    }
  }
}
