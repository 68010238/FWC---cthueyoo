const balloon = document.getElementById("balloon");

const colors = ["red", "green", "blue"];
let colorIndex = 0;
let size = 200;

const MIN_SIZE = 200;
const MAX_SIZE = 420;
const GROW_STEP = 10;
const SHRINK_STEP = 5;

function updateBalloon() {
	balloon.style.width = size + "px";
	balloon.style.height = size + "px";
	balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", function () {
	size += GROW_STEP;

	if (size > MAX_SIZE) {
		size = MIN_SIZE;
		colorIndex = 0;
	} else {
		colorIndex = (colorIndex + 1) % colors.length;
	}

	updateBalloon();
});

balloon.addEventListener("mouseleave", function () {
	size -= SHRINK_STEP;
	if (size < MIN_SIZE) {
		size = MIN_SIZE;
	}

	colorIndex = (colorIndex - 1 + colors.length) % colors.length;

	updateBalloon();
});