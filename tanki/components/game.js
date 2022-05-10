import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Tank from "./tank.js";

export default class Game{
    constructor(container){
        this.canvas = new Canvas(container)
        this.tank = new Tank(this.canvas.context)
        new GameLoop(this.update.bind(this), this.render.bind(this))

    }

    update(){


        this.tank.control()
        this.tank.draw()

    }
    render(){
        
    }
}

new Game(document.querySelector('#root'))


