# Campus Hide & Seek - Project Review

**Review Date:** November 18, 2025
**Team:** Disciples of Ali
**Reviewer:** Professor Haider

---

## Executive Summary

**Overall Grade Assessment: Excellent Work** ✅

Your team successfully delivered a working browser-based Hide & Seek game that meets all stated requirements by the November 18 deadline. The All-In-One.html implementation demonstrates solid understanding of HTML, CSS, and JavaScript fundamentals, with particularly strong use of localStorage for data persistence.

---

## What You Did Well

### 1. **Met All Requirements On Time** 🎯
- ✅ All 5 basic user stories completed
- ✅ Both extra features implemented
- ✅ Delivered by stated deadline (11/18/2025)

### 2. **Solid Technical Implementation**
- **localStorage usage** - Game state persists across page refreshes
- **Target assignment logic** - Properly matches players by location and time
- **Event-driven architecture** - Clean use of event listeners
- **Role randomization** - Fair assignment of finder/hider roles
- **Game history tracking** - Complete audit trail of matches

### 3. **Good Project Management**
- Clear user stories in README
- Used branches and pull requests
- Meaningful commit messages
- Task breakdown aligned with features

### 4. **Clean Code Quality**
- Well-structured HTML with semantic elements
- Consistent CSS styling with hover effects
- Modular JavaScript functions
- Proper form validation

---

## Individual Contributions

### Shreyas Manandhar - **Project Lead** (7 commits, 39%)
**Contributions:**
- Repository setup and structure
- Game Setup Menu (HTML/CSS/JS)
- **All-In-One.html** - Integrated 283-line final version
- README documentation and user stories
- Merged pull requests and coordinated team

**Feedback:** Excellent leadership and integration work. The All-In-One version shows strong understanding of how all components work together.

---

### Jayden Thompson - **Frontend Developer** (7 commits, 39%)
**Contributions:**
- Player Info Input system (161 lines)
- Form design with validation
- "Found" button feature
- CSS styling for input forms

**Feedback:** Strong consistent contributions throughout project lifecycle. Your player input system is the foundation of the entire game flow.

---

### Shaima Ben Othmane - **Backend Developer** (3 commits, 17%)
**Contributions:**
- Defined 5 user stories (project requirements)
- Created assignTarget.js with matching logic
- Initial project planning

**Feedback:** Good work on requirements definition and core logic. The target assignment algorithm works correctly.

---

### Daniel Aluko - **Developer** (1 commit, 6%)
**Contributions:**
- Lobby system (85 lines)
- Finder page (50 lines)
- Game setup menu updates

**Feedback:** You added significant code (183 lines), but delivered it in a single commit. In future projects, commit more frequently - one commit per feature makes collaboration easier and shows your progress.

---

## Areas for Improvement

### 1. **Git Workflow - Daniel**
**Issue:** 183 lines of code in 1 commit
**Impact:** Hard to review, hides your contribution pattern
**Fix:** Commit after each feature:
```
Commit 1: Add lobby.html structure
Commit 2: Implement lobby.js player rendering
Commit 3: Add finder.html and finder.js
Commit 4: Update game-setup-menu integration
```

### 2. **Documentation Maintenance**
**Issue:** README checklist shows all tasks as `[ ]` unchecked
**Impact:** Looks incomplete even though work is done
**Fix:** Update to `[x]` for completed items:
```markdown
- [x] Create HTML form with input fields for name and appearance hints
- [x] Style the form with CSS
- [x] Write JS function to capture input and store in a player array
```

### 3. **Team Members Directory**
**Issue:** Daniel missing from `team members/` folder
**Impact:** Incomplete team documentation
**Fix:** Add `team members/daniel.txt`:
```
Name: Daniel Aluko
Role: Developer
Favorite Programming Language: [Your language]
```

### 4. **File Organization**
**Issue:** Duplicate implementations (modular files + All-In-One)
**Impact:** Unclear which version is "official"
**Fix:** Add note in README:
```markdown
## Project Structure
- **All-In-One.html** - Main deliverable (integrated version)
- Other files - Modular development versions
```

---

## Technical Observations

### Strengths
1. **Proper use of localStorage** - Shows understanding of browser APIs
2. **Array manipulation** - filter(), find(), forEach() used correctly
3. **Random assignment** - Math.random() for fair role/target selection
4. **DOM manipulation** - Dynamic rendering of player lists
5. **Form validation** - Prevents empty submissions

### Potential Enhancements
*(Not required, but would demonstrate advanced skills)*

1. **Input Validation**
   - Minimum 2 players required before proceeding
   - Warn if no matching players for target assignment
   - Prevent duplicate names

2. **Error Handling**
   ```javascript
   try {
       localStorage.setItem("players", JSON.stringify(allPlayers));
   } catch(e) {
       alert("Unable to save game state. Check browser settings.");
   }
   ```

3. **Better Role Assignment**
   - Currently picks first finder - could randomize initial selection
   - Handle odd numbers of players better
   - Allow manual role assignment option

4. **UI/UX Improvements**
   - Add "Restart Game" button to clear all data
   - Show player count in real-time
   - Add timer/countdown for play sessions
   - Confirmation dialog before removing found players

5. **Accessibility**
   - Add ARIA labels for screen readers
   - Keyboard navigation support
   - Color contrast for visibility

---

## Code Review - All-In-One.html

### What Works Well
```javascript
// Good: Proper event listener pattern
playerForm.addEventListener("submit", function(e){
    e.preventDefault();
    // ... validation and processing
});

// Good: Data persistence
localStorage.setItem("players", JSON.stringify(allPlayers));

// Good: Filter/find usage
const candidates = allPlayers.filter(p =>
    p.location===currentPlayer.location &&
    p.time===currentPlayer.time &&
    p.id!==currentPlayer.id
);
```

### Minor Issues
```javascript
// Line 182: Could be more efficient
while(unmatched.length >=2){
    for(let i=0;i<unmatched.length;i++){
        // ... nested loop that only runs once due to break
    }
    break; // This break makes while loop unnecessary
}

// Suggestion: Use for loop instead
for(let i=0; i<unmatched.length-1; i++){
    for(let j=i+1; j<unmatched.length; j++){
        // ... pairing logic
    }
}
```

---

## Testing Coverage

### What You Should Test
- [ ] Add 0 players → Should show alert
- [ ] Add 1 player → Should show alert in lobby
- [ ] Add 2+ players with same location → Roles assign correctly
- [ ] Add 2+ players with different locations → No target found
- [ ] Click "Found" button → Game history updates
- [ ] Refresh page → Data persists from localStorage
- [ ] Clear localStorage → App handles gracefully

---

## Deployment Recommendation

### GitHub Pages Setup
Your project is ready to deploy! To make it live:

1. Go to repository Settings
2. Navigate to "Pages" section
3. Source: Deploy from branch `main`
4. Folder: `/ (root)`
5. Save

Your game will be live at:
`https://shreyasmanandhar.github.io/team-DisciplesOfAli-project/All-In-One.html`

**Note:** Make sure All-In-One.html is in the root directory (it is!)

---

## Presentation Tips

When presenting this project, emphasize:

1. **Problem solved:** "Students want to organize impromptu Hide & Seek games on campus"
2. **Technical highlights:**
   - localStorage for data persistence
   - Algorithm for matching players by location/time
   - Complete game flow from input → lobby → gameplay → history
3. **Live demo:**
   - Add 3-4 players with different locations/times
   - Show role assignment
   - Demonstrate target matching
   - Show game history after marking someone as found
4. **Challenges overcome:**
   - Coordinating multiple pages/features
   - Implementing fair random assignment
   - Handling edge cases (no matching players)

---

## Final Thoughts

This is solid work that demonstrates:
- ✅ Understanding of JavaScript fundamentals
- ✅ Ability to work with browser APIs (localStorage, DOM)
- ✅ Team collaboration and version control
- ✅ Meeting deadlines with functional deliverables
- ✅ Problem-solving and algorithm implementation

**Key Takeaway for Next Project:**
Commit early and often. Small, frequent commits make collaboration smoother and showcase your development process.

**Overall:** Strong execution on a complex multi-step application. Well done!

---

**Reviewed by:** Professor Haider
**Date:** November 18, 2025
