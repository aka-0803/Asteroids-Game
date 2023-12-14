const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); // object which  has tool to draw in 2d

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillStyle = 'black';
c.fillRect(0,0,canvas.width,canvas.height);