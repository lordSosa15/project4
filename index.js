const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./img/PelletTown.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

class Sprite {
    constructor({
        position,
        velocity
    }){
        this.position = this.position
    }
}

const background = new Sprite()

function animate() {
  window.requestAnimationFrame(animate);
  context.drawImage(image, -740, -600);
  context.drawImage(
    playerImage,
    //size of image rendered or crop
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    //where image is rendered or actual position
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
}
animate()

window.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  switch (e.key) {
    case "ArrowDown":
      console.log("pressed arrowDown");
      break;
    case "ArrowUp":
      console.log("pressed arrowUp");
      break;
    case "ArrowRight":
      console.log("pressed arrowRight");
      break;
    case "ArrowLeft":
      console.log("pressed arrowLeft");
      break;
  }
});
