window.addEventListener("load", function () 
{

  const canvas = this.document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");


  function setSize()
   {
    window.onresize = arguments.callee;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  setSize();

 
  function getRandom(min, max) 
  {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //color design
  const colors = [
    "#c4c1b9",
    "#a3a098",
    "#888c85",
    "#6b6967",
    "#4a5251",
    "#737175",
    "#a19da0",
  ];

  function Ball() 
  {
    this.x = getRandom(0, canvas.width);
    this.y = getRandom(0, canvas.height);
    this.r = getRandom(20, 60);
    this.ballColor = colors[Math.floor(Math.random() * colors.length)];
    this.vx = getRandom(20, 60);
    this.vy = getRandom(20, 60);
  }

  Ball.prototype.ballMove = function ()
   {
    ctx.beginPath();
    ctx.fillStyle = this.ballColor;
    ctx.arc(this.x, this.y, this.r, 2 * Math.PI, false);
    ctx.fill();
    this.x += this.vx;
    this.y += this.vy;
    if (this.x - this.r < 0 || this.x + this.r > canvas.width) {
      this.vx *= -0.98;
    } else if (this.y - this.r < 0 || this.y + this.r > canvas.height) {
      this.vy *= -0.98;
    }
  };


  const arr = new Array();

//ball number
  function ballNum(num) {
    for (var i = 0; i < num; i++) {
      arr.push(new Ball());
    }
  }
  ballNum(10);


  this.setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var item of arr) {
      item.ballMove();
    }
  }, 1000 / 60);
});
