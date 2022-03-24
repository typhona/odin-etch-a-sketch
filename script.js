let container = document.querySelector('.gridContainer');
let gridNum = document.querySelector('.gridDivs');




let twoD = 10;

function drawSquare() {


  for (let i = 0; i < twoD; i++) {
    // console.log("hello!")
    for (let j = 0; j < twoD; j++) {
      cells = document.createElement('div');
      cells.classList.add('gridDivs');
      cells.innerText = i;
      intViewportWidth = window.innerWidth;
      cells.style.width = intViewportWidth / twoD + "px";
      container.appendChild(cells);
      console.log(i + cells.style.width);
      cells.addEventListener("mouseenter", function(event) {
        // highlight the mouseenter target
        event.target.style.background = "green";

      });
    }

  }
}
drawSquare();