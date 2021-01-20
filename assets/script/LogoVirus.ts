import { _decorator, Component, Node, Vec3, random, tween, UIOpacity } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('LogoVirus')
export class LogoVirus extends Component {
    @type(Node)
    m_Circle: Node | null = null
    @type(Node)
    m_Virus: Node | null = null
    @type(Node)
    m_Tail: Node | null = null

    v3: Vec3 | undefined
    width: number = 0

    init (x:number, y: number, width: number) {
        this.v3 = new Vec3(x,y, 0)
        this.width = width
    }

    onLoad () {
        // @ts-ignore
        // let uiOpacity = this.m_Tail.getComponent(UIOpacity)
        // // @ts-ignore
        // let obj = {opacity: 250}
        // tween(this.m_Tail)
        //     .to(3, {opacity: 0}, {
        //         // @ts-ignore
        //         // onUpdate (target: Node, ratio: number): void {
        //         //     console.info(target, ratio)
        //         //     // console.info(obj.opacity)
        //         //     // uiOpacity.opacity = obj.opacity
        //         //     // this.m_Tail.getComponent(UIOpacity).opacity = ratio
        //         // }
        //     }).start()

        let obj = { a: 0 }
        tween(obj)
            .to(1, { a: 100 }, {
                onUpdate(target: object, ratio: number) {
                    console.info(obj.a) // 还是100
                }
            })
            .call(() => {
                console.info(obj) // 还是100
            })
            .start()
    }

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
