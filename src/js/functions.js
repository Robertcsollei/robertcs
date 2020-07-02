export default function testFunctions() {
   
   const canvas = document.getElementById('canvas');
   const Home = document.getElementById('Home')
   const ctx = canvas.getContext('2d')
   canvas.width  = window.innerWidth - '300';
   canvas.height = window.innerHeight;


   let particleColor = "#fff"


   let particleArray;

   let mouse = {
      x: null,
      y: null,
      radius: (canvas.height/80) * (canvas.width/80)
   }

   

   Home.addEventListener('mousemove', (event) => {
      mouse.x = event.x
      mouse.y = event.y

   })

   class Particle {
      constructor(x, y, directionX, directionY, size, color){
         this.x = x;
         this.y = y;
         this.directionX = directionX;
         this.directionY = directionY;
         this.size = size;
         this.color = color;
      }
      //draw each particle
      draw(){
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
         ctx.fillStyle = particleColor
         ctx.fill()
      }

      update(){
         if(this.x < 0 || this.x > canvas.width){
            this.directionX = -this.directionX
         }
         if(this.y < 0 || this.y > canvas.height){
            this.directionY = -this.directionY
         }

         let dx = mouse.x - this.x
         let dy = mouse.y - this.y

         let distance = Math.sqrt(dx*dx + dy*dy)

         if(distance < mouse.radius + this.size){
            if(mouse.x < this.x && this.x < canvas.width - this.size *2){
               this.x +=2
            }
            if(mouse.x > this.x && this.x > this.size * 2) {
               this.x -= 2  
            }
            if(mouse.y < this.y && this.y < canvas.height - this.size * 2){
               this.y += 2
            }
            if(mouse.y > this.y && this.y > this.size * 2) {
               this.y -= 2
            }

         }

         this.x += this.directionX
         this.y += this.directionY
         this.draw()

      }
   }

   function init(){
      particleArray = []
      let numberOfParticles = 35

      for(let i = 0; i < numberOfParticles; i++){
         let size = (Math.random() * 5) + 1;
         let x = (Math.random() * ((canvas.width - size * 2) - (size * 2) + size * 2))
         let y = (Math.random() * ((canvas.height - size * 2) - (size * 2) + size * 2))

         let directionX = (Math.random() * 1) -0.5
         let directionY = (Math.random() * 1) -0.5

         let color = particleColor;


         particleArray.push(new Particle(x, y, directionX, directionY, size, color))
      }
   }

   function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0,0, canvas.width, canvas.height)

      for(let prt = 0; prt < particleArray.length; prt++){
         particleArray[prt].update();
      }
      connect()
   }


   function connect(){
      let opacityValue = 1
      for(let a = 0; a < particleArray.length; a++){
         for(let b = a; b < particleArray.length; b++){
            let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x )) +
            ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y)) 
            if(distance < (canvas.width / 7) * (canvas.height / 7)) {
               opacityValue = 1 - (distance/20000)
               ctx.strokeStyle = `rgba(255,255,255, ${opacityValue})`
               ctx.lineWidth = 1
               ctx.beginPath();
               ctx.moveTo(particleArray[a].x, particleArray[a].y)
               ctx.lineTo(particleArray[b].x, particleArray[b].y)
               ctx.stroke();
            }
         }
      }
   }

window.addEventListener('resize', () => {
   canvas.width  = window.innerWidth - '300';
   canvas.height = window.innerHeight;
   mouse.radius = (canvas.height/80) * (canvas.width/80)
   init()
})

window.addEventListener('mouseout', () => {
   mouse.x = undefined;
   mouse.y = undefined;
})


   init()
   animate()

}


