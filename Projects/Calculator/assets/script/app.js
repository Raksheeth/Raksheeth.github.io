var display=document.getElementsByClassName("display")[0];
function on(){
    display.placeholder=0;
    display.value="";
} 
function off(){
    display.placeholder="";
    display.value="";
}
function clr() {
    var clear  = display.value;
    display.value=clear.substring(0,clear.length -1);
}
function input(num){
    display.value+=num;
}
function output(){
    var result=eval(display.value);
    if (result==undefined){
        display.value="0";
    }
    else
    if(result==Infinity){
        display.value="Cannot be divided by 0";
    }
    else
    display.value=result;
}
function keyboard(){
   var keyEvent=event.which; 
    if (keyEvent==8) {
        clr();
    } 
    else
    if (keyEvent==13){
        output();
    }
}