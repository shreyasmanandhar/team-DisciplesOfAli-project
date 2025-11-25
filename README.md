<div align="center">
  <img src="logo/log.jpg" alt="Project Logo" width="200"/>

  # Campus Hide & Seek

  [![Build Status](https://img.shields.io/github/workflow/status/USERNAME/REPO/CI)](https://github.com/USERNAME/REPO/actions)
  [![Coverage](https://img.shields.io/codecov/c/github/USERNAME/REPO)](https://codecov.io/gh/USERNAME/REPO)
  [![License](https://img.shields.io/github/license/USERNAME/REPO)](LICENSE)
  [![Version](https://img.shields.io/github/v/release/USERNAME/REPO)](https://github.com/USERNAME/REPO/releases)

  **🕵️‍♂️ “Campus Hide & Seek – a browser game where students become hunters and targets.”**

  [Demo](https://demo-link.com) • [Documentation](https://docs-link.com) • [Report Bug](https://github.com/USERNAME/REPO/issues)
</div>

## Project Overview
This is a browser‑based Hide & Seek game where players input their info, select a location and play time, get assigned a target, and record game results.

## Team Info
- **Team Name:** Disciples of Ali  
- **Project:** Campus Hide & Seek Browser Game  
- **Technology:** HTML, CSS, JavaScript  

## Goal
By **11/18/2025** we will have a working browser‑based Hide & Seek game with player info, target assignment, and game history.

## User Stories

### The Basics
- As a player, I want to enter my name and appearance hints, so that I can be identified in the game.  
- As a player, I want to select location and estimated play time, so that I can join a game.  
- As a player, I want the system to assign me a target based on location and time, so that I know who to find.  
- As a player, I want to toggle “Found” when I find my target, so that the game result is recorded.  
- As a player, I want to see my past game results, so that I can track my performance.  

### Extras
- As a player, I want to see hints about my target, so that I can find them more easily.  
- As a player, I want to restart a game without reloading the page, so that I can play multiple rounds easily.  

## Tasks
- [x] **Player Info Input** – Create HTML form with input fields for name and appearance hints (Frontend).  
  - Style the form with CSS (Frontend).  
  - Write JS function to capture input and store in a player array (Code).  
  - Test that input is saved correctly (Testing).  

- [x] **Game Setup** – Create dropdown menus for location and estimated play time (Frontend).  
  - Capture selections in JS variables (Code).  
  - Test that selections are recorded correctly (Testing).  

- [x] **Target Assignment** – Write JS logic to assign a target based on matching location and time (Code).  
  - Display target hints to the player (Frontend + JS).  
  - Test that targets are assigned correctly (Testing).  

- [x] **Gameplay (“Found” Button)** – Add a “Found” button in HTML (Frontend).  
  - Write JS function to toggle game status when clicked (Code).  
  - Update game record/history array (Code).  
  - Test the complete flow from start to finish (Testing).  

- [x] **Game History** – Display game results in a table or list on the page (Frontend + JS).  
  - Optional: Use `localStorage` to persist results across sessions (Code).  
  - Test that game history displays correctly (Testing).  

## Highlights
- 🚀 **Fast** – Optimized performance.  
- 🔒 **Secure** – Industry‑standard security.  
- 📱 **Responsive** – Works on all devices.  
- 🎨 **Customizable** – Flexible configuration.

## Installation
```bash
# Using npm
npm install campus-hide-seek

# Using yarn
yarn add campus-hide-seek

# Using Docker
docker run -p 3000:3000 USERNAME/campus-hide-seek

