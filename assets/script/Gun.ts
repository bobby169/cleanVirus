import { _decorator, Component, Node } from 'cc';
const { ccclass, property, type} = _decorator;

@ccclass('Gun')
export class Gun extends Component {

    @type(Node)
    circle = null
    onLoad () {
        this.circle.active = false
    }

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
