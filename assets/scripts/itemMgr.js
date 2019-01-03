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
        level: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //registe touch events
        this.node.on("touchstart",this.touchesBegan,this);
        this.node.on("touchmove",this.touchesMoved,this);
        this.node.on("touchend",this.touchesEnd,this);
        this.node.on("touchcancel",this.touchesCanceled,this);
    },

    start () {

    },
    refreshItemData(){
        // color
        var colorLevel = Math.floor(this.level / 5);
        switch(colorLevel) {
            case 0: 
                this.node.color = cc.Color.WHITE;
                break;
            case 1:
                this.node.color = cc.Color.BLUE;
                break;
            case 2:
                this.node.color = cc.Color.YELLOW;
                break;
            case 3:
                this.node.color = cc.Color.GREEN;
                break;
            case 4:
                this.node.color = cc.Color.MAGENTA;
                break;
            default:
                this.node.color = cc.Color.ORANGE;
        }
        // level label
        var levelLabel = cc.find("label_bg/levelLabel",this.node);
        var label = levelLabel.getComponent(cc.Label);
        label.string = this.level;
    },

    touchesBegan(event){
        
    },
    touchesMoved(event) {
        var x = event.getLocationX();
        var y = event.getLocationY();
        
    },
    touchesEnd(event){
        
    },
    touchesCanceled(event){
        
    },

    // update (dt) {},
    onDestroy(){
        this.node.off("touchstart",this.touchesBegan,this);
        this.node.off("touchmoved",this.touchesMoved,this);
        this.node.off("touchend",this.touchesEnd,this);
        this.node.off("touchcancel",this.touchesCanceled,this);
    },
});
