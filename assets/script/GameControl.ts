import {_decorator, Component, Node, Vec2, Vec3} from 'cc';

const {ccclass, property, type} = _decorator;

@ccclass('GameControl')
export class GameControl extends Component {

    @type(Node)
    airPlane = null

    @type(Node)
    touchControl = null

    onLoad () {
        globalThis.GameControl = this
        this.touchControl.active = false

        this.scheduleOnce(() => {
           this.touchControl.active = true
        }, 1.5)
    }

    start() {
        // Your initialization goes here.
    }

    moveAirPlane(pos: Vec2) {
        const curPos = this.airPlane.getPosition();
        this.airPlane.setPosition(new Vec3(curPos.x + pos.x, curPos.y + pos.y, 0));
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
