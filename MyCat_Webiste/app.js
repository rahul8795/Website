// Write our Javascript in here
//alert("HELLO FROM APP.JS");
var pics = [
    "imgs/1.jpg",   //0
    "imgs/2.jfif",  //1
    "imgs/3.jfif",  //2
    "imgs/4.jfif",  //3
    "imgs/5.jfif",  //4
    "imgs/6.jfif"   //5
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click",function(){
    //alert("Cliked  ");
    img.src = pics[counter];
    counter = counter + 1;
    if(counter == 6){
        counter = 0;
    }
});