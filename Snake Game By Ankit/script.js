

let inputDir ={x:0,y:0};
const foodsound=new Audio('food.wav');
const gameoverSound=new Audio('over.wav');
const moveSound=new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
let speed=5;
let score=0;
let lastTime=0;
let snakeArr=[
    
    {x:13,y:15}

]
food ={x:6, y:7};

//game function//
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime-lastTime)/1000<1/speed){
        return;
    }
    lastTime=ctime;
    gameEngine()
}
function isCollide(snake){
    //if you bump your self
    for(let i =1; i<snakeArr.length; i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true;
        }
    }   //if you pump into the wall
        if(snake[0].x>=18|| snake[0].x<=0 || snake[0].y>=18|| snake[0].y<=0){
            return true;
    }
}
function gameEngine(){
    // updating snkae arry nd food
    if(isCollide(snakeArr)){
        gameoverSound.play();
        musicSound.pause();
        inputDir ={x:0,y:0};
        alert("game over press any key play again");
        snakeArr =[{x:13,y:15}];
        musicSound.play();
        score =0;
    }
    //if you add eaten the food incriment the score and regenerate the food
    if(snakeArr[0].y ===food.y && snakeArr[0].x===food.x){
        foodsound.play();
        score +=1;
        scorebox.innerHTML="score"+score;
        snakeArr.unshift({x:snakeArr[0].x+ inputDir.x,y:snakeArr[0].y+inputDir.y});
        //Random number
        let a=2;
        let b=16;
        food ={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}

    }
    //Moving snake
    for(let i=snakeArr.length-2; i>=0; i--){
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x +=inputDir.x;
    snakeArr[0].y +=inputDir.y;
     box.innerHTML= "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart= e.x;
        snakeElement.style.gridRowStart=e.y;
        if(index===0)
        {
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
         box.appendChild(snakeElement);

    })

    //Display food
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    box.appendChild(foodElement);
     
}


//main logic satrts here
musicSound.play();
// let hiscore=localStorage.getItem("hiscore");
// if(hiscore===null)
// {
//     localStorage.setItem("hiscore",JSON.stringify(hiscoreval ))
// }
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
   inputDir ={x:0, y:1}//start the game
   moveSound.play()
   switch(e.key){
    case "ArrowUp":
        console.log("ArrowUp");
        inputDir.x=0;
        inputDir.y=-1;
        break;
   } 
   switch(e.key){
    case "ArrowDown":
        console.log("ArrowDown");
        inputDir.x= 0;
        inputDir.y=1;
        break;
   } 
   switch(e.key){
    case "ArrowLeft":
        console.log("ArrowLeft");
        inputDir.x=-1;
        inputDir.y=0;
        break;
   } 
   switch(e.key){
    case "ArrowRight":
        console.log("ArrowRight");
        inputDir.x=1;
        inputDir.y=0;
        break;
        default:
            break;
   } 
})



