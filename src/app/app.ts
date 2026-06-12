import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenu } from './components/main-menu/main-menu';
import { GameSetup } from './components/game-setup/game-setup';
import { GamePlay } from './components/game-play/game-play'; // Проверь этот импорт!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    MainMenu, 
    GameSetup, 
    GamePlay
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  currentScreen: 'menu' | 'setup' | 'play' = 'menu';

  changeScreen(screen: 'menu' | 'setup' | 'play') {
    this.currentScreen = screen;
  }
}