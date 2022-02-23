console.log("Js is working fine");

let turn = "O";

const turnchange = () => {
  return turn === "O" ? "X" : "O";
};

const drawCheck = () => {
  var draw = false;
  let b = document.getElementsByClassName("boxtext");
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    const element = b[i];
   
    if (!(element.innerHTML =='')) {
      count++;
    }

    if (count == 9) {
      draw = true;
      console.log("yikes");    }
    
  }

  return playerwin()?false:draw;
}
var winnerText="";
const playerwin = () => {
  let boxcontent = document.getElementsByClassName("boxtext");
  let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winState = false;
  winner.forEach((wins) => {
    // console.log("checking")
    if (
      boxcontent[wins[0]].innerText === boxcontent[wins[1]].innerText &&
      boxcontent[wins[2]].innerText === boxcontent[wins[1]].innerText &&
      boxcontent[wins[0]].innerText !== ""
    ) {
      var winner = boxcontent[wins[0]].innerText;
      document.getElementsByClassName("turn-heading")[0].innerHTML =
        boxcontent[wins[0]].innerText + " WON"
        winnerText= boxcontent[wins[0]].innerText;
      winState = true;
    } 

  }
  );

  return winState
  
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    var winBool = playerwin();
   
    if (boxtext.innerText === "" && winBool==false) {
      boxtext.innerText = turn;
      turn = turnchange();
      // console.log(winState);
      winState = playerwin();
     winState?null: document.getElementsByClassName("turn-heading")[0].innerText =
        "Turn for  " + turn;
    } else if (winBool==true) {
      // console.log(winState);
      document.querySelector(".winner-text").innerText= winnerText+" Won";
      document.querySelector(".toast").classList.remove("hide");
      document.querySelector(".blur-wrapper").classList.add("blur");
      // alert("Please Restart the Game");
    }

    if (drawCheck() == true) {
      document.getElementsByClassName("turn-heading")[0].innerText ="It's a Draw!"
    }
  });
});
document.body.querySelector(".toast-button").addEventListener('click',()=>{
 
  console.log(winnerText);
  document.querySelector(".toast").classList.add("hide");
  document.querySelector(".blur-wrapper").classList.remove("blur");
})
reset.addEventListener("click", () => {
  
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((element) => {
      element.innerText = "";
    });
    turn = "O";
    document.getElementsByClassName("turn-heading")[0].innerText =
      "Turn for  " + turn;
  
});

