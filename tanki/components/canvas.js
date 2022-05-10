export default class Canvas {

    constructor(container){
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')

        
        this.canvas.width = 440
        this.canvas.height = 870



        container.appendChild(this.canvas)
    }

}