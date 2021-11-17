import { Component } from '@angular/core';
import { Circle } from './core/circle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  circles: Circle[] = [new Circle()]

  maxCircles = 10

  onCircleBounce(circleBounced: Circle): void {
    if(this.circles.length < this.maxCircles){
      let newCircle = circleBounced.clone()

      let randVelX = Math.random()
      let randVelY = Math.random()

      newCircle.velocity.x += this.coinFlip() ? randVelX : -randVelX
      newCircle.velocity.y += this.coinFlip() ? randVelY : randVelY

      this.circles.push(newCircle)
    }
  }

  coinFlip(): boolean {
    let flip = Math.random() % 2
    return flip == 0 ? true : false
  }
}
