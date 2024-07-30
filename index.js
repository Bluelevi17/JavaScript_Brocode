let count = 0;
let decrease = document.getElementById("btn1");
let reset = document.getElementById("btn2");
let increase = document.getElementById("btn3");
let countlabel = document.getElementById("count");

decrease.onclick =  function(){
    count--;
    countlabel.textContent = count;
}

increase.onclick =  function(){
    count++;
    countlabel.textContent = count;
}

reset.onclick =  function(){
    count=0;
    countlabel.textContent = count;
}
