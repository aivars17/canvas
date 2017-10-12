canvas = document.getElementById('laukas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var c = canvas.getContext("2d");

var mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener("mousemove", function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);
	
})


/*
function circle(x,y){
	this.x = x;
	this.y = y;
	this.update = function(){
		this.draw();
	}
	this.draw = function(){
		c.beginPath();
		c.arc(x,y,50,0,2*Math.PI);
		c.stroke();
	}
}

var taip = new Taip(500,500);

function work(){
	requestAnimationFrame(work);
	taip.update(x,y);
}
work();*/
/*d_x = 0;
d_y = 0;


/*document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 37:
		d_x -= 20;
		break;
		case 38:
		d_y -= 20;
		break;
		case 39:
		d_x += 20;
		break;
		case 40:
		d_y += 20;
		break;
	}
}
/*c.moveTo(800,750);
c.lineTo(1000,750);
c.lineTo(1000,600);
c.lineTo(800,600);
c.lineTo(800,750);
c.lineTo(800,600);
c.lineTo(900,450);
c.lineTo(1000,600);
c.stroke();

c.moveTo(970,650);

c.lineTo(970,700);
c.lineTo(950,700);
c.lineTo(950,650);
c.lineTo(970,650);
c.lineTo(930,650);
c.lineTo(930,700);
c.lineTo(950,700);
c.stroke();

c.moveTo(870,650);
c.lineTo(870,700);
c.lineTo(850,700);
c.lineTo(850,650);
c.lineTo(870,650);
c.lineTo(830,650);
c.lineTo(830,700);
c.lineTo(850,700);
c.stroke();

c.moveTo(950,450);
c.lineTo(950,525);
c.lineTo(920,480);
c.lineTo(920,450);
c.lineTo(950,450);

c.stroke();*/

function Circle(x, y, dx, dy, r) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.r = r;
	
	this.update = function () {
		if (this.x + this.r >= innerWidth || this.x - this.r <= 0) {
		this.dx = -this.dx;

	}
	 if (this.y + this.r >= innerHeight || this.y - this.r <= 0) {
		this.dy = -this.dy;
	}
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}
	this.draw = function (){
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		c.fillStyle = "red";
		c.fill();
	}
}
var Circlearray = [];
	for (var i = 0; i < 2; i++) {
		var x = Math.floor(Math.random() * (window.innerWidth -20)+20);
		var	y = Math.floor(Math.random() * (window.innerHeight-20)+20);
		var dx = 6;
		var dy = 6;
		var r = 40;
		Circlearray.push(new Circle(x,y, dx, dy, r));
	}

function Box(x,y,w,h) {
	this.x = x;
	this.y = x;
	this.w = w;
	this.h = h;

	this.update = function(d_x,d_y) {
	if (this.x >= innerWidth) {
		this.x = 0;

	}
	 if (this.y >= innerHeight ) {
		
		this.y = 0;
	} 
	if (this.y <= 0) {
		this.y = innerHeight;
	}
	
		this.x += dx;
		this.y += dy;
		this.draw();
	}


	this.draw = function() {
		c.beginPath();
		c.rect(this.x, this.y, this.w, this.h);
		c.fill();
	}
	
}
	var box = new Box(700,100);

		
function anim() {
	
	
	requestAnimationFrame(anim);

	c.clearRect(0,0, innerWidth, innerHeight);
	for (var i = 0; i < Circlearray.length; i++) {
		Circlearray[i].update();
	}

	
	box.update(d_x,d_y);
	d_x = 0;
	d_y = 0;
		x += dx;
		y += dy;
}
anim();/*

setInterval(animate,50);
function animate() {
	

for (var i = 0; i < 100; i++) {
	x = Math.random() * window.innerWidth;
	y = Math.random() * window.innerHeight;
	c.fillStyle = "rgb("+(Math.floor(Math.random() * 256))+", "+(Math.floor(Math.random() * 256))+","+(Math.floor(Math.random() * 256))+")";
	r = Math.floor(Math.random() * 15);
	c.beginPath();
	c.arc(x, y, r, 0, 2 * Math.PI, false);
	c.fill();
	c.strokeStyle = "rgb("+(Math.floor(Math.random() * 256))+", "+(Math.floor(Math.random() * 256))+","+(Math.floor(Math.random() * 256))+")";
	c.stroke();

}

}
*/





