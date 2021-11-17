import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Circle } from '../circle';

@Component({
  selector: 'app-circle-ui',
  templateUrl: './circle-ui.component.html',
  styleUrls: ['./circle-ui.component.scss']
})
export class CircleUIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.frame()
    }, this.clockSpeed)
  }

  @Output() bounce = new EventEmitter()

  clockSpeed = 1

  @Input() circle: Circle

  xBounce(): void {
    if(this.circle.position.x <= 0){
      if(this.circle.velocity.x < 0){
        this.circle.velocity.x *= -1
        this.bounce.emit()
      }
    }
    if(this.circle.position.x + 50 >= document.body.getBoundingClientRect().width){
      if(this.circle.velocity.x > 0){
        this.circle.velocity.x *= -1
        this.bounce.emit()
      }
    }
  }

  yBounce(): void {
    if(this.circle.position.y <= 0){
      if(this.circle.velocity.y < 0){
        this.circle.velocity.y *= -1
        this.bounce.emit()
      }
    }
    if(this.circle.position.y + 50 >= document.body.getBoundingClientRect().height){
      if(this.circle.velocity.y > 0){
        this.circle.velocity.y *= -1
        this.bounce.emit()
      }
    }
  }

  frame(): void {
    this.circle.move(
      this.circle.position.x + this.circle.velocity.x, 
      this.circle.position.y + this.circle.velocity.y
    )
    this.xBounce()
    this.yBounce()
  }

  getStyles(): {} {
    return {
      left: `${this.circle.position.x}px`,
      top: `${this.circle.position.y}px`
    }
  }
}
