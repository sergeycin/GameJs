export default class Tank{
    constructor(context){

        this.context = context;
        this.x = 150
        this.y = 100

        this.control()

        this.tankimg = new Image()

        this.tankimg.src = './components/tank.png'
    }
    draw(){

        this.context.drawImage(this.tankimg,this.x,this.y,100,99)

    } 
       control(){

                 this.y += 1

    }
}