var name = prompt("Welcome,What is your name?");
var namediv = document.getElementById("player-name");
namediv.innerHTML = name;
var selected = [];
var spandiv = document.getElementById("tries");
spandiv.innerHTML =0;
var boxes = document.querySelectorAll(".item");
for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    box.addEventListener("click", function() {
        if(!this.classList.contains("flipped")){
        selected.push(this);
        this.classList.toggle("flipped");
        }

        if(selected.length % 2 == 0){
            CheckIfEqual(selected[selected.length-1].childNodes[3],selected[selected.length-2].childNodes[3]);
        }

        IfGameWon(selected);
    });
}

function CheckIfEqual(img1,img2){ // To check if two images chosen are matched or not.
    if(img1.src == img2.src){
        var audio = new Audio("sounds/correct.mp3");
        audio.play();
    }
    else{
        spandiv.innerHTML++;
        var audio = new Audio("sounds/lose.mp3");
        audio.play();

        setTimeout(function(){
            selected[selected.length-1].classList.toggle("flipped");
            selected[selected.length-2].classList.toggle("flipped");
            selected.pop();
            selected.pop();
            
        },500);
       
    }
}

function IfGameWon(array){
 if(array.length == 20){
    alert("YOU WONNNNN!");
    var audio = new Audio("sounds/cheering.mp3");
    audio.play();
 }
}
