//ComputerMove
var comp = [];

//UserMove
var user = [];

//Add a random whole number between 0 and 3 to the arr
function computerMove() {
  console.log(comp);
    return comp.push(Math.round(Math.random() *3))
}

function insert0() {
   console.log(user);
    return user.push(0);
}
function insert1() {
console.log(user);
    return user.push(1);
}
function insert2() {
   console.log(user);
    return user.push(2);
}
function insert3() {
 console.log(user);
    return user.push(3);
}

//Comparing the 2 arrays. If they aren't the same then no more actions needed.
//So leave loop and return false.
function compareMoves(){
    if(comp.length !== user.length){
      return false;
    }
    for (var i=0; i<comp.length; i++) {
        if (comp[i] !== user[i]) {
            console.log('nah mate');
            return false;
        }
    }
    return true;
}

function done(){
  while(compareMoves()){
    computerMove();
    user=[];
  }
}

function reset(){
  comp=[];
  user=[];
}
