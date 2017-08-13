// Define A Variables
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Color of Piece
var colors = [
	null,
	'violet',
	'yellow',
	'orange',
	'green',
	'blue',
];

var player = {
	position: {x:0, y:0},
	piece: null,
	score: 0,
}

// Create Piece with 10 pixel width
var arena = createPiece(10, 20);

// Scale of piece or object in canvas
context.scale(20, 20);

function arenaSweep() {
	var rowCount = 1;
	outer: for (var y = arena.length - 1; y > 0; --y) {
		for (var x = 0; x < arena[y].length; ++x) {
			if (arena[y][x] === 0) {
				continue outer;
			}
		}
		var row = arena.splice(y, 1)[0].fill(0);
		arena.unshift(row);
		++y;

		player.score += rowCount * 1;
		rowCount *= 2;
	}
}

function collide(arena, player) {
	var [p, o] = [player.piece, player.position];
	for (var y = 0; y < p.length; ++y) {
		for (var x = 0; x < p[y].length; ++x) {
			if (p[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
				return true;
			}
		}
	}
	return false;
}

function createPiece(w, h) {
	var piece = [];
	while (h--) {
		piece.push(new Array(w).fill(0));
	}
	return piece;
}

function pieceShape(type) {
	if (type === 'T') {
		return [
			[0, 0, 0],
			[1, 1, 1],
			[0, 1, 0],
		];
	}
	else if (type === 'O') {
		return [
			[2, 2],
			[2, 2],
		];
	}
	else if (type === 'L') {
		return [
			[0, 3, 0],
			[0, 3, 0],
			[0, 3, 3],
		];
	}
	else if (type === 'S') {
		return [
			[4, 0, 0],
			[4, 4, 4],
			[0, 0, 4],
		];
	}
	else if (type === 'I') {
		return [
			[0, 0, 0, 0],
			[5, 5, 5, 5],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		];
	}
}

function draw() {
	context.fillStyle = "#000";
	context.fillRect(0, 0, canvas.width, canvas.height);

	drawPiece(arena, {x:0, y:0});
	drawPiece(player.piece, player.position);
}

function drawPiece(piece, offset) {
	piece.forEach((row, y)=> {
		row.forEach((value, x)=> {
			if (value !== 0) {
				context.fillStyle = colors[value];
				context.fillRect(x + offset.x,
								 y + offset.y,
								 1, 1);
			}
		});
	});
}

function merge(arena, player) {
	player.piece.forEach((row, y)=> {
		row.forEach((value, x)=> {
			if (value !== 0) {
				arena[y + player.position.y][x + player.position.x] = value;
			}
		});
	});
}

function playerDrop() {
	player.position.y++;
	if (collide(arena, player)) {
		player.position.y--;
		merge(arena, player);
		playerReset();
		arenaSweep();
		updateScore();
	}
	dropCounter = 0;
}

function playerMove(direction) {
	player.position.x += direction;
	if (collide(arena, player)) {
		player.position.x -= direction;
	}
}

function playerReset() {
	var Strpieces = 'TOLIS';
	player.piece = pieceShape(Strpieces[Strpieces.length * Math.random() | 0]);
	player.position.y = 0;
	player.position.x = (arena[0].length / 2 | 0) - 
						(player.piece[0].length / 2 | 0);
	if (collide(arena, player)) {
		arena.forEach(row => row.fill(0));
		// player.score = 0;
		updateScore();
		gameOver();
	}
}

function playerRotate(direction) {
	var position = player.position.x;
	var offset = 1;
	rotate(player.piece, direction);
	while (collide(arena, player)) {
		player.position.x += offset;
		offset = -(offset + (offset > 0 ? 1 : -1 ));
		if (offset > player.piece[0].length) {
			rotate(player.piece, -direction);
			player.position.x = position;
			return;
		}
	}
}

function rotate(piece, direction) {
	for (var y = 0; y < piece.length; ++y) {
		for (var x = 0; x < y; ++x) {
			[
				piece[x][y],
				piece[y][x],
			] = [
				piece[y][x],
				piece[x][y],
			];
		}
	}

	if (direction > 0) {
		piece.forEach(row => row.reverse());
	}
	else {
		piece.reverse();
	}
}

var dropCounter = 0;
var dropInterval = 1000;

var lastTime = 0;
function update(time = 0) {
	var deltaTime = time - lastTime;
	lastTime = time;
	
	dropCounter += deltaTime;
	if (dropCounter > dropInterval) {
		playerDrop();
	}

	draw();
	requestAnimationFrame(update);
}

function updateScore() {
	document.getElementById('score').innerText = player.score;
}

function gameOver() {
	var show = document.getElementById('showPop');
	show.innerHTML ="<div><h2>Game has ended !</h2> <hr> <span>Your score is : </span>"+ player.score +" <br><button type='button' onclick='return playerRestart()'>Restart Game</button> </div>";
	show.style.display = "block";
	console.log(player.score);
}

function playerRestart() {
	arena.forEach(row=> row.fill(0));
	document.getElementById('showPop').style.display = "none";
	player.score = 0;
}

document.addEventListener('keydown', event => {
	if (event.keyCode === 37) {
		playerMove(-1);
	}
	else if (event.keyCode === 39) {
		playerMove(1);
	}
	else if (event.keyCode === 40) {
		playerDrop();
	}
	else if (event.keyCode === 38) {
		playerRotate(-1);
	}
});

playerReset();
updateScore();
update();