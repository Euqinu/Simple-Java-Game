
var character= document.getElementById("character");
var obstacle= document.getElementById("obstacle");

function jumpObstacle(){
     character.classList.add('animation');

     setTimeout(()=>{
         character.classList.remove('animation');
     },500)
     
}

var checkGameStatus=setInterval(function  () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var obstacleSide =  parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
   
    if(obstacleSide < 53 && obstacleSide > 0 && characterTop>=350){
        obstacle.style.animation='none';
        obstacle.style.display='none';
        alert('Game Over')

    }

},10);
