# Tic-Tac-Toe

A modern, interactive Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS. Features a clean UI, player customization, and persistent score tracking.

🎮 **[Play the Game Live](https://abdirazakf.github.io/tic-tac-toe/)**

---

## ✨ Features

- **Two-Player Gameplay**: Classic X vs O gameplay
- **Player Customization**: Set custom names for both players
- **Score Tracking**: Keeps track of wins and draws throughout the session
- **No Page Refresh**: Smooth game resets without reloading the page
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modular Code Architecture**: Clean, maintainable JavaScript using module pattern

---

## 🛠️ Technologies Used

- **HTML**: Semantic markup with dialog element for modal
- **CSS**: Modern styling with responsive design
- **JavaScript**: Modular code using IIFE pattern
- **GitHub Pages**: Deployment and hosting

---

## 📁 Project Structure

```
tic-tac-toe/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── scripts.js          # Game logic and interactivity
├── assets/
│   └── img/
│       ├── x.svg       # X player marker
│       └── circle.svg  # O player marker
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or build tools required

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdirazakf/tic-tac-toe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```

3. Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server installed)
   npx http-server
   ```

4. Navigate to `http://localhost:8000` in your browser

---

## 🎯 How to Play

1. **Start the Game**: Enter player names in the modal dialog that appears on page load
2. **Make Moves**: Click on any empty square to place your marker (X goes first)
3. **Win Conditions**: Get three markers in a row (horizontal, vertical, or diagonal)
4. **Score Tracking**: Wins and draws are automatically tracked in the scoreboard
5. **New Game**: After each game ends, the board automatically resets while preserving scores

---

## 💻 Code Architecture

The project follows a modular JavaScript pattern with three main modules:

### GameSetup Module
- Manages game board state
- Tracks player information and scores
- Handles game state (win/draw/ongoing)

### UI Module
- Manages DOM elements and updates
- Handles modal dialog for player names
- Updates scoreboard and game board visuals
- Clears board between games

### Round Module
- Implements game logic for each square
- Checks win conditions after each move
- Manages turn alternation between players
- Handles game reset while preserving scores

### Event Controller
- Initializes event listeners
- Handles form submission for player names
- Manages click events on game squares

---

## Contributing

1. Fork this repository  
2. Create a new branch:  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:  
   ```bash
   git commit -m "Add new dashboard widget"
   ```
4. Push to your fork and open a pull request