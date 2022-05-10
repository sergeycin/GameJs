import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";

export default class Game{
    constructor(container){
        this.canvas = new Canvas(container)


        new GameLoop(this.update.bind(this), this.render.bind(this))

    }

    update(){
        console.log('update')
    }
    render(){

    }
}

new Game(document.querySelector('#root'))


