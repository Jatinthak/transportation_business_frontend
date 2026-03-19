const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const gridSize = 20;
const tileSize = canvas.width / gridSize;

let snake = [];
let direction = { x: 1, y: 0 };
let food = { x: 10, y: 10 };
let score = 0;
let speed = 8;
let loopId = null;

const scoreValue = document.getElementById("scoreValue");
const speedValue = document.getElementById("speedValue");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

function resetGame() {
  snake = [
    { x: 8, y: 10 },
    { x: 7, y: 10 },
    { x: 6, y: 10 },
  ];
  direction = { x: 1, y: 0 };
  score = 0;
  speed = 8;
  placeFood();
  updateHud();
  draw();
}

function updateHud() {
  scoreValue.textContent = score;
  speedValue.textContent = speed;
}

function placeFood() {
  let next;
  do {
    next = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
  } while (snake.some((part) => part.x === next.x && part.y === next.y));
  food = next;
}

function drawCell(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * tileSize, y * tileSize, tileSize - 1, tileSize - 1);
}

function draw() {
  ctx.fillStyle = "#0f111b";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCell(food.x, food.y, "#f55f6b");
  snake.forEach((segment, index) => {
    drawCell(segment.x, segment.y, index === 0 ? "#7bdff2" : "#2d97c4");
  });
}

function step() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  if (head.x < 0 || head.y < 0 || head.x >= gridSize || head.y >= gridSize) {
    stopGame();
    return;
  }

  if (snake.some((part) => part.x === head.x && part.y === head.y)) {
    stopGame();
    return;
  }

  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score += 1;
    if (score % 5 === 0) {
      speed = Math.min(16, speed + 1);
      restartLoop();
    }
    placeFood();
  } else {
    snake.pop();
  }

  updateHud();
  draw();
}

function startGame() {
  if (loopId) return;
  loopId = setInterval(step, 1000 / speed);
}

function stopGame() {
  clearInterval(loopId);
  loopId = null;
}

function restartLoop() {
  stopGame();
  startGame();
}

function setDirection(x, y) {
  if (snake.length > 1 && snake[0].x + x === snake[1].x && snake[0].y + y === snake[1].y) {
    return;
  }
  direction = { x, y };
}

document.addEventListener("keydown", (event) => {
  switch (event.key.toLowerCase()) {
    case "arrowup":
    case "w":
      setDirection(0, -1);
      break;
    case "arrowdown":
    case "s":
      setDirection(0, 1);
      break;
    case "arrowleft":
    case "a":
      setDirection(-1, 0);
      break;
    case "arrowright":
    case "d":
      setDirection(1, 0);
      break;
  }
});

startBtn.addEventListener("click", () => {
  startGame();
});

resetBtn.addEventListener("click", () => {
  stopGame();
  resetGame();
});

resetGame();
