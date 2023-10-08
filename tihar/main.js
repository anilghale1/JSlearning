const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100; // Adjust the radius as needed

class Tihar {
    constructor(angle) {
        this.angle = angle;
        this.x = centerX + radius * Math.cos(angle);
        this.y = centerY + radius * Math.sin(angle);
        setInterval(() => {
            // Call getRandomColor function here
            this.color = this.getRandomColor();
            // Do something with the color, for example, log it
            console.log(this.color);
        }, 200);
    }

    draw() {
        
        c.beginPath();
        c.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
    }

    move() {
        
    }

    update() {
        this.draw();
        this.move();
        
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
       

     


const arr = [];
for (let i = 0; i < 10; i++) {
    const angle = (Math.PI * 2 * i) / 10; // Divide the circle into 10 equal parts
    const obj = new Tihar(angle);
    arr.push(obj);
}

setInterval( () => {
    
        

for (let i = 0; i < 10; i++) {
    arr[i].update();
}
},200)
