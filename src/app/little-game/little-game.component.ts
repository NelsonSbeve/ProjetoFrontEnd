import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-little-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './little-game.component.html',
  styleUrl: './little-game.component.css'
})
export class LittleGameComponent {
  paddleX: number = 250;
  ballX: number = 300;
  ballY: number = 400;
  ballDX: number = 1;
  ballDY: number = -1;
  bricks: any[] = [];
  brickRowCount: number = 3;
  brickColumnCount: number = 5;
  brickWidth: number = 75;
  brickHeight: number = 20;
  brickPadding: number = 10;
  brickOffsetTop: number = 30;
  brickOffsetLeft: number = 30;
  score: number = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  drawBricks() {
    for(let c=0; c<this.brickColumnCount; c++) {
      for(let r=0; r<this.brickRowCount; r++) {
        let brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
        let brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
        this.bricks.push({ x: brickX, y: brickY, status: 1, color: `hsl(${r * 20}, 100%, 50%)` });
      }
    }
  }

  collisionDetection() {
    for(let i=0; i<this.bricks.length; i++) {
      let brick = this.bricks[i];
      if(brick.status == 1) {
        if(this.ballX > brick.x && this.ballX < brick.x + this.brickWidth && this.ballY > brick.y && this.ballY < brick.y + this.brickHeight) {
          this.ballDY = -this.ballDY;
          brick.status = 0;
          this.score++;
          if(this.score === this.brickRowCount * this.brickColumnCount) {
            clearInterval(this.interval);
            alert("Congratulations! You win!");
          }
        }
      }
    }
  }

  movePaddle(event: MouseEvent) {
    const element = event.target as HTMLElement;
    this.paddleX = event.clientX - element.getBoundingClientRect().left - this.brickWidth / 2;
    if (this.paddleX < 0) this.paddleX = 0;
    if (this.paddleX > 500 - this.brickWidth) this.paddleX = 500 - this.brickWidth;
  }
  startGame() {
    this.score = 0;
    this.bricks = [];
    this.drawBricks();
    this.interval = setInterval(() => {
      this.collisionDetection();
      this.ballX += this.ballDX;
      this.ballY += this.ballDY;
      if(this.ballX < 0 || this.ballX > 600) this.ballDX = -this.ballDX;
      if(this.ballY < 0 || (this.ballY > 400 && this.ballX > this.paddleX && this.ballX < this.paddleX + this.brickWidth)) this.ballDY = -this.ballDY;
      if(this.ballY > 400) {
        clearInterval(this.interval);
        alert("Game Over!");
      }
    }, 10);
  }

}
