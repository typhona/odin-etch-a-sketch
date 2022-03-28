// The Odin Project Javascript Basics --13. Project: Etch-a-Sketch
// Allen Smith 2022

let container = document.querySelector('.gridContainer');
let resetBtn = document.querySelector('.reconfig')

let cWidth = 960;
let twoD = 64;


function drawSquare(num) {

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      cells = document.createElement('div');
      cells.classList.add('gridDivs');
      intViewportHeight = window.innerHeight
      cells.style.width = cWidth / num + "px";
      cells.style.height = intViewportHeight / num + "px";

      container.appendChild(cells);

      cells.addEventListener("mouseenter", function(event) {
        // change div background color
        event.target.style.background = "green";
      });

    }
  }

}

resetBtn.addEventListener('click', function() {
  container.innerHTML = ' ';
  newNum = window.prompt('Please Choose a number between 2 and 100')
  drawSquare(newNum);
})

drawSquare(twoD);