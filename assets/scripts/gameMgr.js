// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        originGold: 1000,
        currentGold: 0,
        currentGoldIncrease: 0,
        
        backGroundPrefab: {
            default: null,
            type: cc.Prefab,
        },
        currentGoldLabel: {
            default: null,
            type: cc.Label,
        },
        goldIncreaseLabel: {
            default: null,
            type: cc.Label,
        },
        itemPrefab: {
            default: null,
            type: cc.Prefab,
        },
        backGroundNodes: {
            default: [],
            serializable: false,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.currentGold = this.originGold;
        this.currentGoldLabel.string = this.currentGold;
        this.goldIncreaseLabel.string = this.currentGoldIncrease;
        this.creatBg();
    },

    // update (dt) {},
    creatBg() {
        for(var x = 0; x < 16 ; x++) {
            var newBackGound = cc.instantiate(this.backGroundPrefab);
            var xPosition = -this.node.width / 2 + 65 + newBackGound.width / 2 + (x % 4) * (newBackGound.width + 30) ;
            var yPosition = this.node.height / 2 - 166 - newBackGound.height / 2 - Math.floor(x / 4) * (newBackGound.height + 30);
            newBackGound.setPosition(xPosition,yPosition);
            this.node.addChild(newBackGound);
            this.backGroundNodes[x] = newBackGound;
        }
    },

    addOneItem(){
        var newItem = cc.instantiate(this.itemPrefab);
        newItem.setPosition(0,0);

        for(var x in this.backGroundNodes){
            var item = this.backGroundNodes[x].getComponent("backgroundMgr").item;
            if(item == null){
                //indicate that the background node is empty
                //add one item to this background node
                newItem.getComponent("itemMgr").refreshItemData();
                this.backGroundNodes[x].addChild(newItem);
                this.backGroundNodes[x].getComponent("backgroundMgr").item = newItem;
                break;
            }
        }
    },
});
