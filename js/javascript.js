// Button Grows
document.getElementById("button1").addEventListener("click", function(){

document.getElementById("box").style.height = "250px";});

// Button Turns Blue
document.getElementById("button2").addEventListener("click", function(){

document.getElementById("box").style.backgroundColor = "Blue";});

// Button Fades
document.getElementById("button3").addEventListener("click", function(){
document.getElementById("box").style.opacity = .5;
});


// Button Resets
document.getElementById("button4").addEventListener("click", function(){

document.getElementById("box").style.height = "150px"
document.getElementById("box").style.backgroundColor = "Orange";
document.getElementById("box").style.opacity = 1;});
