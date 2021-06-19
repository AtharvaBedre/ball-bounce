var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(400,600);

    block1 = createSprite(50,580,100,30);
    block1.shapeColor = "blue";

    block2 = createSprite(155,580,100,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(260,580,100,30);
    block3.shapeColor = "green";

    block4 = createSprite(365,580,100,30);
    block4.shapeColor = "red";

    ball = createSprite(random(0,400),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 8;
    ball.velocityX = 8;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.stop();
    }

    //write code to sbounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
 
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "red";
    }

    drawSprites();
}
