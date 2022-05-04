var canvas = document.getElementById("game")
var context = canvas.getContext("2d")




var ship = new Image()
ship.src = 'img/ship01.png'

var aster = new Image()
aster.src = 'img/astero.png'

var fone = new Image()
fone.src = 'img/fon2.png'

var bull = new Image() // bullet image
bull.src = 'img/fire.png'

var fireImage = new Image()
fireImage.src = 'img/animFire.png'


var CoordAster = []  // Massive Asteroid

CoordAster[0] = {
    x: Math.floor(Math.random() * 100),
    y: 100,
    dx: 2,
    dy: 2,
}

var Bullet = []
var fire = []

var timer = 0; // Кулдаун для спавна астероидов

var shipCoord = {x: 300, y: 300}

fone.onload = () =>{
    game()
}
canvas.addEventListener('mousemove', (event) => {
    shipCoord.x = event.offsetX-25
    shipCoord.y = event.offsetY-25
})

function render(){
    context.drawImage(fone,0,0,600,600)
    context.drawImage(ship,shipCoord.x,shipCoord.y,100,99)
    // context.drawImage(aster,203,yPoint,70,66)

    for (i in CoordAster){
        context.drawImage(aster,CoordAster[i].x ,CoordAster[i].y + CoordAster[i].dy,70,66)
        CoordAster[i].y+= CoordAster[i].dy
        CoordAster[i].x+= CoordAster[i].dx
    }

    for (b in Bullet){
        context.drawImage(bull,Bullet[b].x,Bullet[b].y,32,32)
        Bullet[b].y -= 10;
    }
    for (f in fire){
        context.drawImage(fireImage,fire[f].x,fire[f].y,32,32)
    }
    

} 
function udpate(){
    
    timer++;    

    

    if(timer%10 == 0){
    Bullet.push({
        x: shipCoord.x+35,
        y: shipCoord.y-15
    })


}


    if(timer%20 == 0){
                
       
 CoordAster =  CoordAster.filter(Aster => Aster.y <= canvas.height);
             
           
        CoordAster.push({
            x: Math.random() * 600,
            y: -50,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 + 2
        })
    }

    for(i in CoordAster){

    for(j in Bullet){

      
            if(Math.abs(CoordAster[i].x+25-Bullet[j].x-15)<50 && Math.abs(CoordAster[i].y - Bullet[j].y) <25){
                    fire.push({
                        x: CoordAster[i].x,
                        y: CoordAster[i].y
                    })
                    CoordAster.splice(i,1);
                    Bullet.splice(j,1); break;
                    
              
            }    
        }
        
    }
  

}

function game (){
    udpate()
    render()
    requestAnimationFrame(game)
}

