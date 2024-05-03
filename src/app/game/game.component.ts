import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  snake: { x: number; y: number }[] = [];
  fruits: { x: number; y: number }[] = [];
  direction: 'up' | 'down' | 'left' | 'right' = 'right';
  gameStarted = false;
  gameOver = false;
  score = 0;

  ngOnInit() {
    document.addEventListener('keydown', (event) => this.handleKeyDown(event));
    setInterval(() => this.moveSnake(), 100);
    setInterval(() => this.generateFruit(), 5000);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.initializeSnake();
    }

    if (!this.gameOver) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.direction !== 'down') this.direction = 'up';
          break;
        case 'ArrowDown':
          if (this.direction !== 'up') this.direction = 'down';
          break;
        case 'ArrowLeft':
          if (this.direction !== 'right') this.direction = 'left';
          break;
        case 'ArrowRight':
          if (this.direction !== 'left') this.direction = 'right';
          break;
      }
    }
  }

  initializeSnake() {
    this.snake = [{ x: 100, y: 100 }];
  }

  moveSnake() {
    if (!this.gameOver) {
      const head = { ...this.snake[0] };
      switch (this.direction) {
        case 'up':
          head.y -= 20;
          break;
        case 'down':
          head.y += 20;
          break;
        case 'left':
          head.x -= 20;
          break;
        case 'right':
          head.x += 20;
          break;
      }

      if (this.checkCollision(head)) {
        this.gameOver = true;
      } else {
        this.snake.unshift(head);
        if (!this.checkFruitCollision(head)) {
          this.snake.pop(); // Remove the tail segment if no fruit is eaten
        }
      }
    }
  }

  checkCollision(head: { x: number; y: number }) {
    return (
      head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 ||
      this.snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
  }

  checkFruitCollision(head: { x: number; y: number }) {
    const index = this.fruits.findIndex(fruit => fruit.x === head.x && fruit.y === head.y);
    if (index !== -1) {
      this.fruits.splice(index, 1); // Remove eaten fruit
      this.snake.push(this.snake[this.snake.length - 1]); // Grow snake by adding new segment
      this.score++; // Increment score
      return true;
    }
    return false;
  }

  generateFruit() {
    if (!this.gameOver) {
      const x = Math.floor(Math.random() * 20) * 20;
      const y = Math.floor(Math.random() * 20) * 20;
      this.fruits.push({ x, y });
    }
  }
}

