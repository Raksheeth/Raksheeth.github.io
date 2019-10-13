
var counter;
var countButton;
var displayCount;
var count;
var countButton1;
var displayCount1;

function initialize(){
 counter = 0;
 count=0;
 countButton = document.getElementsByClassName("count-button")[0];
 displayCount = document.getElementsByClassName("displayCount")[0];
 countButton1 = document.getElementsByClassName("count-button")[1];
 displayCount1 = document.getElementsByClassName("displayCount")[1];
}
function vote(){
  counter=counter+1;
  displayCount.innerHTML = "Count:" + counter;
}
function vote1(){
  count=count+1;
  displayCount1.innerHTML = "Count:" + count;
}
function reset(){
    count=0;
    counter=0;
    displayCount.innerHTML = 0;
    displayCount1.innerHTML = 0;
}