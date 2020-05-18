
var numofSquare= 6;
var squares_colors = generateRandomColor(numofSquare);
var squares= document.querySelectorAll('.square');
var val= document.getElementById('val');
var decision = document.querySelector('#decision');
var pickedColor= randomColor();
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector('#reset');
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
val.textContent = pickedColor;



easybtn.addEventListener('click',function () {
    easybtn.classList.add('selected');
    hardbtn.classList.remove('selected');
    numofSquare =3 ;
    squares_colors = generateRandomColor(numofSquare);
    pickedColor=randomColor();
    val.textContent = pickedColor;

    for(var i=0  ; i< squares.length ; i++) {
        if(squares_colors[i]){
            squares[i].style.backgroundColor= squares_colors[i];
        }
        else{
            squares[i].style.display= 'none';
        }
    }
});

hardbtn.addEventListener('click',function() {
    hardbtn.classList.add('selected');
    easybtn.classList.remove('selected');
    numofSquare =6 ;
    squares_colors = generateRandomColor(numofSquare);
    pickedColor=randomColor();
   val.textContent = pickedColor;

    for(var i=0 ; i< squares.length ; i++) {
        
            squares[i].style.backgroundColor= squares_colors[i];
        
            squares[i].style.display= 'block';
        }
    
});


resetBtn.addEventListener('click', function () {
   squares_colors = generateRandomColor(6);
   
   pickedColor = randomColor();

   val.textContent= pickedColor;
   decision.textContent="";
   this.textContent='New Colors';

   for (var i=0 ;i< squares.length ; i++){
       squares[i].style.backgroundColor= squares_colors[i];
   }

   h1.style.backgroundColor= "steelblue";
    
});


for(var i=0 ; i<squares.length ; i++){
    //setting square color
    squares[i].style.backgroundColor=squares_colors[i];

    // clicking on square
    squares[i].addEventListener('click', function () {
       var clickedcolor= this.style.backgroundColor;
        

        if(clickedcolor === pickedColor){
           decision.textContent='Correct';
           resetBtn.textContent='Play Again ?';
            changeColor(pickedColor);
            h1.style.backgroundColor= "steelblue";
          
        }
        else{
            decision.textContent='Try Again';
            this.style.backgroundColor='#232323';
        }
    });
    
}

function changeColor(color) {
    for(var i =0 ;i< squares_colors.length;i++){
        squares[i].style.backgroundColor=color;
    }
    
}
function randomColor() {
    var randomcolor=Math.floor(Math.random() * squares_colors.length);
    //Math.random() * value  : to choose random number between 0 and value
    //Math.floor() : eliminates all values after decimal
    
    return squares_colors[randomcolor];
}

function generateRandomColor(num){   //num get value 6
    var arr = [];

    for (var i=0 ; i< num ; i++){
           arr.push(ownrgbDenerator());
    }
    return arr;

}

function ownrgbDenerator() {
    //generating random rgb color value for r and g and b  255 +1
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r + ", " + g + ", " + b +")";

}