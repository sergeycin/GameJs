var canvas = document.getElementById("game")
var context = canvas.getContext("2d")

var ship = new Image()
ship.src = 'img/ship01.png'

var aster = new Image()
aster.src = 'img/astero.png'

var fone = new Image()
fone.src = 'img/fon2.png'




fone.onload = () =>{
    game()
}

function render(){
    context.drawImage(fone,0,0,600,600)
    context.drawImage(ship,100,500,50,26)
    context.drawImage(aster,203,100,70,66)
}
function udpate(){

}

function game (){
    udpate()
    render()
    requestAnimationFrame(game)
}

