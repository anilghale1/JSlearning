const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Circle{
    constructor()
    {
         this.directionX = 1;
         this.directionY = 1;
        this.position = {
            x : 100,
            y : 100,
            radius : Math.random() * 20 + 1,
            color : this.getRandomColor(),
        };

        this.velocity = 
        {
             x: Math.random() * (1 - -1) + -1,
              y: 0,
            };

    }

    draw()
    {
        
        c.beginPath();
        c.fillStyle = this.position.color;
        c.arc(this.position.x,this.position.y,this.position.radius,0,Math.PI * 2);
        c.fill();

        }

        move()
        {
            
            this.position.x += this.directionX * Math.random() * 2; // Random horizontal movement
            this.position.y += this.directionY * Math.random() * 2; // Random vertical movement

        }

        update()
        {
            this.draw();
            this.move();
            this.checkCollision();
        }

        checkCollision()
        {
            if(this.position.x < this.position.radius || this.position.x >= canvas.width - this.position.radius)
            {
            //   this.position.color = "red";
              this.directionX *= -1;
                       
            }

            if(this.position.y < this.position.radius || this.position.y >= canvas.height - this.position.radius)
            {
            //   this.position.color = "red";
              this.directionY *= -1;
                           
            }

           
        }

        getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
            return color;
        }

}



const circArr = [];

for(let i = 0; i<40; i++)
{
    const obj = new Circle();
     circArr.push(obj);
}

//game loop
  function animate()
  {
      c.clearRect(0,0,canvas.width,canvas.height);
            
        for(let i = 0; i<40; i++)
        {
            circArr[i].update();
        }
  
      requestAnimationFrame(animate);
  }

  animate();
