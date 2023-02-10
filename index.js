let homeScorebtn1  = document.getElementById("hbtn1"); //takes care of adding scores buttons in the home section 
let homeStore = document.getElementById("scoreh"); //takes care of the storage of the score of home section 
let countH = 0; //initializes the value to 0

function plusoH(){ // function made for button 1 in home section 
    countH += 1; 
    homeStore.textContent = countH;
}
function plustH(){  //function made for button 2 in home section 
    countH += 2;
    homeStore.textContent = countH;
}
function plusthH(){  //function made for button 3 in home section 
    countH += 3; 
    homeStore.textContent = countH;
}



let guestScorebtn1  = document.getElementById("gbtn1"); // same as above except it is made for guest section
let guestStore = document.getElementById("scoreg");
let countG = 0;

function plusoG(){
    countG += 1; 
    guestStore.textContent = countG;
}
function plustG(){
    countG += 2;
  guestStore.textContent = countG;
}
function plusthG(){
    countG += 3; 
    guestStore.textContent = countG;
}
