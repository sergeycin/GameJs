
var cvs = document.getElementById("canvas")
var ctx = cvs.getContext("2d")

var bird = new Image();
var bg = new Image(); // Создание объекта
var road = new Image(); // Создание объекта
var pipeUp = new Image(); // Создание объекта
var pipeBottom = new Image(); // sСоздание объекта

bird.src = "img/bird.png"; // Указание нужного изображения
bg.src = "img/background.png"; // Аналогично
road.src = "img/road.png"; // Аналогично
pipeUp.src = "img/topPipe.png"; // Аналогично
pipeBottom.src = "img/bottomPipe.png"; // Аналогично

var score = 0;
var gap = 90; // отступ между 2 блоками
// Позиции для птицы
var xPos = 10
var yPos = 150
var gravScale = 1.5



// Звуковые файлы
var fly = new Audio(); // Создание аудио объекта
var score_audio = new Audio(); // Создание аудио объекта

fly.src = "audio/fly.mp3"; // Указание нужной записи
score_audio.src = "audio/score.mp3"; // Аналогично

// Cоздание стольбов
pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
}

document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= 25;
    fly.play()
}


function draw(){
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y)
        ctx.drawImage(pipeBottom,pipe[i].x, pipe[i].y + pipeUp.height + gap)

        pipe[i].x--

        if(pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        // Отслеживание прикосновений
 if(xPos + bird.width >= pipe[i].x
    && xPos <= pipe[i].x + pipeUp.width
    && (yPos <= pipe[i].y + pipeUp.height
    || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - road.height) {
    location.reload(); // Перезагрузка страницы
    }

        if(pipe[i].x == 5){
            score++
            score_audio.play()
        }
    }

    ctx.drawImage(road,0, cvs.height - road.height)

    ctx.drawImage(bird, xPos, yPos)

    yPos+= gravScale
    ctx.fillStyle = "#000"
    ctx.font = "24px Verdana"
    ctx.fillText("Счет:" + score,10, cvs.height - 20)
    requestAnimationFrame(draw)
}

draw()