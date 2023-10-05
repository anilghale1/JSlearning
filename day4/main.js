
const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");

class Parricle{
    constructor(){
        this.x = Math.random() * (400-0) + 0;
        this.y = Math.random() * (400-0) + 0;
        this.r =  Math.random() * (20-5) + 5;
    }

    draw()
    {
        c.beginPath();
        c.arc(this.x, this.y, this.r,0,Math.PI *2);
        c.fill();
    }

    move(){
        this.x += Math.random() * (1- -1) + -1;
         this.y += Math.random() * (1- -1) + -1;
    }
}

const arr = [];
for(let i = 0; i<250; i++)
{
    const obj = new Parricle();
    arr.push(obj);
}


function animate()
 {
     c.clearRect(0,0,500,400);

  for(let i =0; i< 250; i++)
  {
    arr[i].draw();
    arr[i].move();
  }

requestAnimationFrame(animate);

 }

 animate();










// let x = Math.random() * (400-0) + 0;
// let y = Math.random() * (400-0) + 0;
// let r = Math.random() * (20-5) + 5;

// const randomNumber = Math.random() * 400;  //(max - min) + min

// //game loop
// function animate()
// {
//     c.clearRect(0,0,500,400);

//     c.beginPath();
//     c.arc(x,y,r,0,360);
//     c.fill();

//     x += Math.random() * (1- -1) + -1;
//     y += Math.random() * (1- -1) + -1;



//     window.requestAnimationFrame(animate);
// }
// animate();