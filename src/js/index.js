
//----------------------------------- BURGER------------------------------------------------------------

let burgerIcon = document.getElementsByClassName('material-icons')[0];
let headerMenu = document.getElementsByClassName('header-menu')[0];


var temp = true;
burgerIcon.addEventListener('click',function(){
    if(temp){
    headerMenu.style.animation= 'popup-menu 1s';
    temp = false;
    }
    else {
        temp = true;
        headerMenu.style.animation= 'popup-menu-reverse 1s';
    }
   
    if(headerMenu.style.display === "block"){
        setTimeout(function(){
            headerMenu.style.display = 'none';
        },1000);
    }
    else{
        headerMenu.style.display = 'block';
    }
});

// --------------------------------------PULSE EFFECT-------------------------------------------------------
let buttons = document.getElementsByClassName('butt');

let forEach = Array.prototype.forEach;

forEach.call(buttons, function(b){
    b.addEventListener('click', addElement);
    });

let buttons2 = document.getElementsByName('butt2');
let forEach2 = Array.prototype.forEach;
forEach2.call(buttons2, function(b){
    b.addEventListener('click', addElement);
    });

function addElement(e){
    var addDiv = document.createElement('div');
    var mValue = Math.max(this.clientWidth, this.clientHeight);
    var sDiv = addDiv.style;
    var px = 'px';
    var rect = this.getBoundingClientRect();
    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}


//------------------------------------------SLIDER--------------------------------------------------

let qouteArr = ['Chop your own wood and it will warm you twice.','Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.',
"Work hard to get what you like, otherwise you'll be forced to just like what you get."];

let autorArr = ['Henry Ford','MICHAEL HOPKINS', 'Bernard Show'];

let qouteElem = document.getElementsByClassName('quote')[0];
qouteElem.innerHTML = qouteArr[1];

let autorQuote = document.getElementsByClassName('autor')[0];
autorQuote.innerHTML = autorArr[1];


let slideOne = document.querySelector('#slider-one');
let slideTwo = document.querySelector('#slider-two');
let slideThree = document.querySelector('#slider-three');

function innerQoute (item){
    qouteElem.style.transition = '0.5s'; 
    qouteElem.style.opacity = "0";
    setTimeout(function(){
        qouteElem.innerHTML = qouteArr[item];
        autorQuote.innerHTML = autorArr[item]; 
        qouteElem.style.opacity = "1"; 
    },350);
};


slideOne.addEventListener('click',function(){
    innerQoute(0);
    slideTwo.className = "slider";
    slideThree.className = "slider";
    slideOne.className = "slider big-slider";
});
    
slideTwo.addEventListener('click',function(){
    innerQoute(1);
    slideOne.className = "slider";
    slideThree.className = "slider";
    slideTwo.className = "slider big-slider";
});

slideThree.addEventListener('click',function(){
    innerQoute(2);
    slideOne.className = "slider";
    slideTwo.className = "slider";
    slideThree.className = "slider big-slider";
});
