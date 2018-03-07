//Caleb Smith-Salzberg, Naotaka Kinoshita
//Team callMeNao 
//SoftDev2 pd7
//K9 -- Ask Circles [Change || Die]
//2018-03-06
var pic = document.getElementById("vimage");
var btn = document.getElementById("clear");

var clearRect = function() {
    var rect = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"rect"
    );
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", pic.getAttribute("width"));
    rect.setAttribute("height", pic.getAttribute("height"));
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
};

var draw = function(e) {
    drawCircle(e.offsetX, e.offsetY);
};

var drawCircle = function(x, y) {
    var cl = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );

    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", 20);
    cl.setAttribute("fill", "red");
    cl.setAttribute("stroke", "black");
    cl.addEventListener("click", change, true);
    pic.appendChild(cl);
    
};

var change = function(e) {
    if (this.getAttribute("fill") == "red") {
	console.log("green");
	this.setAttribute("fill", "green");
	e.stopPropagation();
    }
    else if (this.getAttribute("fill") == "green") {
	this.remove();
	e.stopPropagation();
	drawCircle(Math.floor(Math.random() * pic.getAttribute("width")), Math.floor(Math.random() * pic.getAttribute("height")));
    }
};

pic.addEventListener("click", draw);
btn.addEventListener("click", clearRect);
