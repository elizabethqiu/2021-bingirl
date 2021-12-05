var ctx = document.getElementById("chart").getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["physical sciences", "mathematical sciences", "computer sciences", "engineering & technology"],
    datasets: [{
      label: 'men',
      data: [51, 63, 81, 81],
      backgroundColor: "#D2FAFF"
    }, {
      label: 'women',
      data: [39, 37, 19, 19],
      backgroundColor: "#F2EBFF"
    }]
  }
});

var squares = [""];
function setup() {
 var box = document.getElementById("win");
 box.style.display = "none";
 var screen = document.getElementById("back");
 screen.style.display = "none";
 
    squares = [""];
    var answers = ["💻", "📐", "📋", "🧪", "🔭", "🔬", "📚", "🏥", "🧠","🎓", "💭", "📢", "🩺", "🧬","🌳", "🔧", "🐭", "🔗", "🚀", "🐶", "📅", "🐟","🤖","💉", "🌍"];
  
  for(i = 0; i < 25; i++) {
   var currBox = document.getElementsByTagName("td")[i];
   var rando = Math.floor(Math.random()*answers.length);
   currBox.innerHTML = answers[rando];
   answers.splice(rando, 1);
   currBox.style.backgroundColor = "white";
 }
}
 
function selected(selectBox) {
 selectBox = document.getElementById(selectBox);
 if(selectBox.style.backgroundColor == "white") {
     selectBox.style.backgroundColor = "#F5EBFF";
     checkWin(selectBox);
 }
 else {
     selectBox.style.backgroundColor = "white";
 }
}
 
function checkWin(selectBox) {
 console.log(squares.push(selectBox.id));
 
   //columns
 if(squares.includes("sq1") &&
    squares.includes("sq6") &&
    squares.includes("sq11") &&
    squares.includes("sq16") &&
    squares.includes("sq21")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq1").style.backgroundColor = "black";
   document.getElementById("sq6").style.backgroundColor = "black";
   document.getElementById("sq11").style.backgroundColor = "black";
   document.getElementById("sq16").style.backgroundColor = "black";
   document.getElementById("sq21").style.backgroundColor = "black";
 }
  if(squares.includes("sq2") &&
    squares.includes("sq7") &&
    squares.includes("sq12") &&
    squares.includes("sq17") &&
    squares.includes("sq22")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq2").style.backgroundColor = "black";
   document.getElementById("sq7").style.backgroundColor = "black";
   document.getElementById("sq12").style.backgroundColor = "black";
   document.getElementById("sq17").style.backgroundColor = "black";
   document.getElementById("sq22").style.backgroundColor = "black";
 }
  if(squares.includes("sq3") &&
    squares.includes("sq8") &&
    squares.includes("sq13") &&
    squares.includes("sq18") &&
    squares.includes("sq23")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq3").style.backgroundColor = "black";
   document.getElementById("sq8").style.backgroundColor = "black";
   document.getElementById("sq13").style.backgroundColor = "black";
   document.getElementById("sq18").style.backgroundColor = "black";
   document.getElementById("sq23").style.backgroundColor = "black";
 }
  if(squares.includes("sq4") &&
    squares.includes("sq9") &&
    squares.includes("sq14") &&
    squares.includes("sq19") &&
    squares.includes("sq24")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq4").style.backgroundColor = "black";
   document.getElementById("sq9").style.backgroundColor = "black";
   document.getElementById("sq14").style.backgroundColor = "black";
   document.getElementById("sq19").style.backgroundColor = "black";
   document.getElementById("sq24").style.backgroundColor = "black";
 }
 
 if(squares.includes("sq5") &&
    squares.includes("sq10") &&
    squares.includes("sq15") &&
    squares.includes("sq20") &&
    squares.includes("sq25")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq5").style.backgroundColor = "black";
   document.getElementById("sq10").style.backgroundColor = "black";
   document.getElementById("sq15").style.backgroundColor = "black";
   document.getElementById("sq20").style.backgroundColor = "black";
   document.getElementById("sq25").style.backgroundColor = "black";
 }
  //rows
 if(squares.includes("sq1") &&
    squares.includes("sq2") &&
    squares.includes("sq3") &&
    squares.includes("sq4") &&
    squares.includes("sq5")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq1").style.backgroundColor = "black";
   document.getElementById("sq2").style.backgroundColor = "black";
   document.getElementById("sq3").style.backgroundColor = "black";
   document.getElementById("sq4").style.backgroundColor = "black";
   document.getElementById("sq5").style.backgroundColor = "black";
 }
  if(squares.includes("sq6") &&
    squares.includes("sq7") &&
    squares.includes("sq8") &&
    squares.includes("sq9") &&
    squares.includes("sq10")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq6").style.backgroundColor = "black";
   document.getElementById("sq7").style.backgroundColor = "black";
   document.getElementById("sq8").style.backgroundColor = "black";
   document.getElementById("sq9").style.backgroundColor = "black";
   document.getElementById("sq10").style.backgroundColor = "black";
 }
 
 if(squares.includes("sq11") &&
    squares.includes("sq12") &&
    squares.includes("sq13") &&
    squares.includes("sq14") &&
    squares.includes("sq15")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq11").style.backgroundColor = "black";
   document.getElementById("sq12").style.backgroundColor = "black";
   document.getElementById("sq13").style.backgroundColor = "black";
   document.getElementById("sq14").style.backgroundColor = "black";
   document.getElementById("sq15").style.backgroundColor = "black";
 }
  if(squares.includes("sq16") &&
    squares.includes("sq17") &&
    squares.includes("sq18") &&
    squares.includes("sq19") &&
    squares.includes("sq20")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq16").style.backgroundColor = "black";
   document.getElementById("sq17").style.backgroundColor = "black";
   document.getElementById("sq18").style.backgroundColor = "black";
   document.getElementById("sq19").style.backgroundColor = "black";
   document.getElementById("sq20").style.backgroundColor = "black";
 }
 if(squares.includes("sq21") &&
    squares.includes("sq22") &&
    squares.includes("sq23") &&
    squares.includes("sq24") &&
    squares.includes("sq25")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq21").style.backgroundColor = "black";
   document.getElementById("sq22").style.backgroundColor = "black";
   document.getElementById("sq23").style.backgroundColor = "black";
   document.getElementById("sq24").style.backgroundColor = "black";
   document.getElementById("sq25").style.backgroundColor = "black";
 }
  //diag
 if(squares.includes("sq1") &&
    squares.includes("sq7") &&
    squares.includes("sq13") &&
    squares.includes("sq19") &&
    squares.includes("sq25")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq1").style.backgroundColor = "black";
   document.getElementById("sq7").style.backgroundColor = "black";
   document.getElementById("sq13").style.backgroundColor = "black";
   document.getElementById("sq19").style.backgroundColor = "black";
   document.getElementById("sq25").style.backgroundColor = "black";
 }
  if(squares.includes("sq5") &&
    squares.includes("sq9") &&
    squares.includes("sq13") &&
    squares.includes("sq17") &&
    squares.includes("sq21")
   ) {
   document.getElementById("win").style.display = "block";
   document.getElementById("back").style.display = "block";
   document.getElementById("sq5").style.backgroundColor = "black";
   document.getElementById("sq9").style.backgroundColor = "black";
   document.getElementById("sq13").style.backgroundColor = "black";
   document.getElementById("sq17").style.backgroundColor = "black";
   document.getElementById("sq21").style.backgroundColor = "black";
 }
}