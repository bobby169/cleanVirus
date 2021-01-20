import { _decorator, Component, Node, Label, ProgressBar, Prefab, NodePool, instantiate, find, tween, Vec3, randomRangeInt} from 'cc';
const { ccclass, property } = _decorator;

const distance = (p1: Vec3, p2: Vec3) => {
    const dx = Math.abs(p2.x - p1.x);
    const dy = Math.abs(p2.y - p1.y);
    return Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
}

@ccclass('ClickGet')
export class ClickGet extends Component {
    @property({ type: Label })
    private m_labelGold = null
    @property({type: ProgressBar})
    public m_progress = null

    @property({type: Prefab})
    goldPrefab = null

    goldPool: NodePool = new NodePool()

    start () {
        // Your initialization goes here.
        console.info(this.m_labelGold)
        console.info(this.m_progress)
    }

    onClick () {
        const pos = this.node.getPosition()
        const parent = find('Canvas/Mask') as Node
        const coin = find('Canvas/Mask/Top/coin') as Node
        const points = this.createCirclePoints(200, pos.x, pos.y, 15)
        const randArr = []
        const coinPos = coin.getPosition()
        for (let i=0; i< points.length; i++) {
            let gold = this.createGold(parent) as Node
            const randPos: Vec3 = new Vec3(points[i].x + randomRangeInt(0, 50), points[i].y + randomRangeInt(0, 50), 0)
            gold.setPosition(randPos.x, randPos.y, 0)
            randArr.push({gold, randPos})
        }

        randArr.sort((a, b) => {
            const disA = distance(a.randPos, coinPos)
            const disB = distance(b.randPos, coinPos)
            return disA - disB
        })

        for (let j = 0; j < randArr.length; j++) {
            const gold = randArr[j].gold
            tween(gold)
                .delay(j * 0.03)
                .to(1, { position: coinPos})
                .start()
        }
    }

    createCirclePoints(r:number, ox: number = 0, oy: number = 0, count: number = 10) {
        const points = []
        const rad = Math.PI / 180 * Math.round(360 / count)
        for (let i = 0; i < count; i++) {
            const x = ox + r * Math.sin(rad * i)
            const y = oy + r * Math.cos(rad * i)
            points.unshift({x, y}) // 保持顺时针
        }
        return points
    }

    createGold (parentNode: Node) {
        let prefab: Node | null = null
        if (this.goldPool.size() > 0) {
            prefab = this.goldPool.get()
        } else {
            prefab = instantiate(this.goldPrefab)
        }
        // @ts-ignore
        prefab.parent = parentNode
        return prefab
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
