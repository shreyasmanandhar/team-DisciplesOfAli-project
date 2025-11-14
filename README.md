# team-DisciplesOfAli-project
Our CS1015 final project

# Campus Hide & Seek Browser Game

## Project Overview
This is a browser-based Hide & Seek game where players input their info, select a location and play time, get assigned a target, and record game results.

## Team Info
- Team Name: Disciples of Ali
- Project: Campus Hide & Seek Browser Game
- Technology: HTML, CSS, JavaScript
- Goal: By 11/18/2025, we will have a working browser-based Hide & Seek game with player info, target assignment, and game history.

## User Stories

### The Basics
- [ ] As a player, I want to enter my name and appearance hints, so that I can be identified in the game.
- [ ] As a player, I want to select location and estimated play time, so that I can join a game.
- [ ] As a player, I want the system to assign me a target based on location and time, so that I know who to find.
- [ ] As a player, I want to toggle “Found” when I find my target, so that the game result is recorded.
- [ ] As a player, I want to see my past game results, so that I can track my performance.

### Extras
- [ ] As a player, I want to see hints about my target, so that I can find them more easily.
- [ ] As a player, I want to restart a game without reloading the page, so that I can play multiple rounds easily.

## Tasks

### Player Info Input
- [ ] Create HTML form with input fields for name and appearance hints (Frontend)
- [ ] Style the form with CSS (Frontend)
- [ ] Write JS function to capture input and store in a player array (Code)
- [ ] Test that input is saved correctly (Testing)

### Game Setup
- [ ] Create dropdown menus for location and estimated play time (Frontend)
- [ ] Capture selections in JS variables (Code)
- [ ] Test that selections are recorded correctly (Testing)

### Target Assignment
- [ ] Write JS logic to assign a target based on matching location and time (Code)
- [ ] Display target hints to the player (Frontend + JS)
- [ ] Test that targets are assigned correctly (Testing)

### Gameplay (“Found” Button)
- [ ] Add a “Found” button in HTML (Frontend)
- [ ] Write JS function to toggle game status when clicked (Code)
- [ ] Update game record/history array (Code)
- [ ] Test the complete flow from start to finish (Testing)

### Game History
- [ ] Display game results in a table or list on the page (Frontend + JS)
- [ ] Optional: Use `localStorage` to persist results across sessions (Code)
- [ ] Test that game history displays correctly (Testing)
