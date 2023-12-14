const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // object which  has tool to draw in 2d

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);

class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
  }
  draw() {
    c.arc(this.position.x,this.position.y,5,0,Math.PI * 2,false)
    c.fillStyle = 'red'
    c.fill()
    // draw the player
    c.moveTo(this.position.x+30,this.position.y)
    c.lineTo(this.position.x-10,this.position.y-10)
    c.lineTo(this.position.x-10,this.position.y+10)
    c.closePath()
    // give color or outline to player
    c.strokeStyle = 'white'
    c.stroke()// this to be called to exec the above line
  }
}

const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

player.draw();
