export default class GameLoop{
    constructor(render,update){
        this.render = render
        this.update = update

        this.animate = this.animate.bind(this)
        this.animate()
    }
    animate(){
        requestAnimationFrame(this.animate)
        console.log('animate')
        this.update()
        this.render()
    }
}