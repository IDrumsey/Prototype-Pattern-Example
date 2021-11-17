import { Prototype } from "./prototype"

export class Circle implements Prototype {
    constructor(){
        this.position = {x: 0, y: 0}
        this.velocity = {x: 1, y: 1}
    }
    position: {x: number, y: number}
    velocity: {x: number, y: number}

    move(x: number, y: number): void {
        this.position = {
            x: x,
            y: y
        }
    }

    clone(): Circle {
        let newCircle = new Circle()
        newCircle.position = {
            x: this.position.x,
            y: this.position.y
        }
        newCircle.velocity = {
            x: this.velocity.x,
            y: this.velocity.y
        }

        return newCircle
    }
}
