import { _decorator, Component, Node, EventTouch, tween, find} from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('TouchControl')
export class TouchControl extends Component {
    @type(Node)
    m_bg = null
    GameControl: null | undefined

    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(Node.EventType.TOUCH_END,this.onTouchEnd, this)
        this.node.on(Node.EventType.TOUCH_MOVE,this.onTouchMove, this)
        this.node.on(Node.EventType.TOUCH_CANCEL,this.onTouchEnd, this)
    }

    onTouchStart () {
        tween(this.m_bg).hide().start()
    }

    onTouchMove (event: EventTouch) {
        const pos = event.getDelta()
        GameControl.moveAirPlane(pos)
    }

    onTouchEnd () {
        tween(this.m_bg).show().start()
    }

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
