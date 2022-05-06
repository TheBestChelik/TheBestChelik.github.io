$('document').ready(function(){

var Width = 22;
var Height = 20;
var canvas = $(".c");

var drawingCanvas = document.getElementById('c');
drawingCanvas.addEventListener("touchstart", handleStart, false);
//drawingCanvas.addEventListener("touchend", handleEnd, false);
//drawingCanvas.addEventListener("touchcancel", handleCancel, false);
drawingCanvas.addEventListener("touchmove", handleMove, false);

var SnakeX = [10,9,8];
var SnakeY = [5,5,5];
var AppleX = -7;
var AppleY = -7;
var Direction = 2;// 0- up; 1-right; 2-down; 3-left;

var xDown = null;
var yDown = null;

var Last = [0,0];


windowSize();
drawField(Width,Height);

document.addEventListener('keydown', function(event) {
    switch(event.code){
        case "ArrowUp":
            if(Direction!=2){
                Direction = 0;
                console.log("UP!");
            }
            break;
        case "ArrowRight":
            if(Direction!=3){
                Direction = 1;
                console.log('Right!');
            }
            break;
        case "ArrowDown":
            if(Direction!=0){
                Direction = 2;
                console.log("Down!");
            }
            break;
        case "ArrowLeft":
            if(Direction!=1){
                Direction = 3;
                console.log("Left!");
            }
            break;
    }

});

function handleStart(evt){
    evt.preventDefault();
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function handleMove(evt){
    evt.preventDefault();
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if( Math.abs( xDiff ) > Math.abs( yDiff ) ){
        if ( xDiff > 0 ) {
            //Left
            console.log("Left swipe")
            if(Direction!=1){
                Direction = 3;
            }

        } else {
            //Right
            console.log("Right swipe")
            if(Direction!=3){
                Direction = 1;
            }
        }
    }else{
        if ( yDiff > 0 ) {
            //Up
            console.log("Up swipe")
            if(Direction!=2){
                Direction = 0;
            }
        } else {
            //Down
            console.log('Down swipe')
            if(Direction!=0){
                Direction = 2;
            }
        }
    }

}


function EverySec(){


        for(var i = SnakeX.length - 1; i>0;i--){
                SnakeX[i] = SnakeX[i-1];
                SnakeY[i] = SnakeY[i-1];


        }
        Last = [SnakeX[SnakeX.length -1],SnakeY[SnakeX.length -1]];
        switch(Direction){
            case 0:
                 //UP
                 SnakeY[0]--;
                 //SnakeY--;
                 break;
            case 1:
                //Right
                SnakeX[0]++;
                break;
            case 2:
                //Down
                SnakeY[0]++;
                break;
            case 3:
                //Left
                SnakeX[0]--;
                break;
        }

        if(SnakeX[0] == -1 || SnakeX[0] == Width+1 || SnakeY[0]== -1 || SnakeY[0] == Height+1){
            alert("Game Over!!");
            window.location.reload()
        }
        for(var i = 1; i<SnakeX.length - 1; i++){
            if(SnakeX[i] == SnakeX[0] && SnakeY[i] == SnakeY[0]){
                alert("Game Over!!")
                window.location.reload()
            }
        }
        if(SnakeX[0] == AppleX && SnakeY[0] == AppleY){
            AppleX = -7;
            AppleY = -7;

            SnakeX.push(Last[0]);
            SnakeY.push(Last[1]);


        }



    drawField(Width,Height);
	setTimeout(EverySec, 100);
}
setTimeout(EverySec,300);


function windowSize(){

    WidthPx = $(window).width();
    HeightPx = $(window).height();
    Width= Math.floor(WidthPx/20) -1;
    Height =Math.floor(HeightPx/20) -5;
}

function drawField(w,h){
	


    drawingCanvas.width = window.innerWidth;
    drawingCanvas.height = window.innerHeight;

    if(drawingCanvas.getContext){
		if(AppleX == -7){
            AppleX = Math.floor(Math.random() * w);
            AppleY = Math.floor(Math.random() * h);
        }
        var ctx = drawingCanvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = "green";
		ctx.strokeRect(0, 0, (w+1)*20, (h+1)*20);
        
        for(var H =0;H<=h;H++){
            for(var W=0;W<=w;W++){

                if(H==AppleY && W == AppleX){
                    ctx.fillStyle = "red";
                    ctx.fillRect(W*20, H*20, 20, 20);
                    ctx.fillStyle = "green";
                }else{
                    var isSnake = false;

                    for(var i=0;i<SnakeX.length;i++){
                        if(SnakeX[i] == W && SnakeY[i] == H){
                            if(SnakeX[0] == W && SnakeY[0] == H){
                                ctx.fillStyle = "yellow"
                            }
                            isSnake = true;
                            break;
                        }
                    }
                    if(isSnake) {
                        ctx.fillRect(W*20, H*20, 20, 20);
                        ctx.fillStyle = "green";
                    }else{
                        //ctx.rect(W*20, H*20, 20, 20);
                    }
                }



            }
        }
        ctx.stroke();
    }else{
        console.log("No context")
    }

}

//$(window).on('load',windowSize);


});
