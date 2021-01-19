import { _decorator, Component, Node, Vec3, tween, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Logo')
export class Logo extends Component {
    @property({type: Node})
    public m_Anim: Array<Node> = [];
    // @ts-ignore
    private tweenEl0:Tween;
    // @ts-ignore
    private tweenProgress: Tween;
    // @ts-ignore
    private tweenVirus2: Tween;
    // @ts-ignore
    private tweenVirus3: Tween;

    reset () {
        this.m_Anim[1].setScale(new Vec3(0,1, 1));

        this.m_Anim[2].setPosition(new Vec3(284,54, 0));
        this.m_Anim[2].setScale(new Vec3(0.2,0.2, 0.2));

        this.m_Anim[3].setPosition(new Vec3(292,32, 0));
        this.m_Anim[3].setScale(new Vec3(0.2,0.2, 0.2))
    }

    // https://github.com/cocos-creator/test-cases-3d/blob/master/assets/cases/tween/script/TweenShowHide.ts
    onLoad () {
        this.reset()

        this.tweenVirus2 = tween(this.m_Anim[2])
            .to(0.3, { position: new Vec3(420, 188, 0), scale: new Vec3(1, 1, 1)}, { easing: 'backIn'})

        this.tweenVirus3 = tween(this.m_Anim[3])
            .to(0.3, { position: new Vec3(443, -30, 0), scale: new Vec3(1, 1, 1)}, { easing: 'backIn'})

        this.tweenProgress = tween(this.m_Anim[1])
            .to(0.3, { scale: new Vec3(1, 1, 1)})
            .call(() => {
                this.tweenVirus2.start()
                this.tweenVirus3.start()
            })

        this.tweenEl0 = tween(this.m_Anim[0])
            .delay(0.15)
            .hide()
            .delay(0.15)
            .show()
            .union()
            .repeat(3)
            .call(() => {
                this.tweenProgress.start()
            })


    }

    start() {
        // this.onEnable()
    }

    onEnable () {
        this.tweenEl0.start();
    }

    onDisable () {
        this.tweenEl0.stop();
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
