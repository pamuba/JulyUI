var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var c = canvas.getContext('2d')

//Rect
// c.fillStyle = 'rgba(255,0,0, .3)'
// c.fillRect(100,100, 100,100)

// c.fillStyle = 'rgba(0,0,255, .3)'
// c.fillRect(300,300, 100,100)

// c.fillStyle = 'rgba(0,255,0, .3)'
// c.fillRect(200,200, 100,100)

//lines
// c.beginPath()
// c.moveTo(50,300)
// c.lineTo(300,100)
// c.lineTo(400,300)
// c.lineTo(1,1)
// c.strokeStyle = "red"
// c.stroke()

// c.beginPath()
// c.moveTo(150,400)
// c.lineTo(350,100)
// c.strokeStyle = "blue"
// c.stroke()

//arc
// for (let i = 0; i < 300; i++) {
   
//     var x = Math.random() * window.innerWidth
//     var y = Math.random() * window.innerHeight

//     c.beginPath()
//     c.arc(x,y, 30, 0, Math.PI*2, true)
//     c.strokeStyle = "blue"
//     c.fillStyle = "#"+i*3
//     c.fill()
//     c.stroke();
// }

//bouncing  ball 
// to make mean of dx, dy be 0
var x = Math.random() * window.innerWidth
var y = Math.random() * window.innerHeight
var dx = (Math.random()-0.5) * 10
var dy = (Math.random()-0.5) * 10
var radius = 30;

function animate(){
    c.clearRect(0,0,innerWidth, innerHeight)
    requestAnimationFrame(animate)
    c.beginPath()
    c.arc(x,y, radius, 0, Math.PI*2, true)
    c.strokeStyle = "gold"
    c.fillStyle = "blue"
    c.fill()
    c.stroke();
    console.log("Called")

    if(x+radius > innerWidth || x-radius < 0){
        dx = -dx
    }

    x+=dx;

    if(y+radius > innerHeight || y-radius < 0){
        dy = -dy
    }

    y+=dy;

}
animate()