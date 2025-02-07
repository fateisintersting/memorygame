# Memory Game

A **React-based memory game** where players match pairs of cards. This project demonstrates core React concepts such as **useState** and **useEffect**, while also incorporating **dynamic grid layouts**, **smooth animations**, and **Tailwind CSS** for styling. As players progress, the grid dynamically resizes, making the game more challenging and engaging.

---

## 🚀 Features

### 🎯 Dynamic Grid Resizing
- The grid expands as the player progresses through different levels, adding an increasing level of difficulty.

### 🎨 Tailwind CSS for Responsive Design
- The game leverages **Tailwind CSS** to create a visually appealing and responsive UI.
- Utilizes **grid layouts**, **button states (hover, disabled)**, and **animations**.

### 🔄 Animated Grid Reset
- A smooth animation plays when the grid resets to enhance user experience.

### 🔍 State Management with React
- **useState** is used to track game progress, including:
  - Selected and matched cards.
  - Current level and grid size.
  - Animations triggered by state changes.

### 🃏 Logic for Matching Pairs & Level Progression
- Players must match **pairs of cards** to clear the level.
- Successfully matching all pairs unlocks the **Next Level** button.

### 🎮 Interactive Buttons
- **Reset Button**: Allows players to restart the current grid.
- **Next Level Button**: Unlocks once all pairs are matched, leading to the next challenge.

---

## 🧠 Concepts Learned

### ⚡ React State Management
- Managing state efficiently with **useState** to handle game logic, animations, and level tracking.

### 🔄 Array Methods for Game Logic
- Used **array methods** like `map` and `sort` to shuffle cards dynamically and render the grid.

### 🖌️ Tailwind CSS Styling
- Utilized Tailwind CSS for:
  - Creating a **dynamic grid layout**.
  - Styling buttons with interactive states.
  - Adding **animations** like `animate-ping` for visual feedback.

### 🏗️ Component-Based Logic
- Developed **interactive components** with event handlers and conditional rendering.

### 🏆 Logical Thinking & Game Flow
- Implemented game logic for:
  - Matching pairs of cards.
  - Advancing levels.
  - Resetting the grid dynamically.

---

## 📥 How to Clone and Run the Project

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/fateisintersting/memorygame.git
```

### 2️⃣ Navigate to the Project Directory
```sh
cd memory-game
```

### 3️⃣ Install Dependencies
Ensure you have **Node.js** installed, then run:
```sh
npm install
```

### 4️⃣ Start the Development Server
```sh
npm start
```
The app will launch on **http://localhost:5173**.

---

## 🎮 How to Play

1. **Click on a card** to reveal its value.
2. **Match two cards** with the same value to remove them from the grid.
3. **Complete all matches** to unlock the **"Next Level"** button.
4. **Advance to the next level** where the grid size increases for added difficulty.
5. Use the **"Reset" button** to restart the current grid if needed.

---

## 📦 Dependencies

- **React** - For building interactive UI components.
- **Tailwind CSS** - For responsive and beautiful styling.

---

## ✨ Customization Ideas
Want to make the game even better? Here are some ideas for enhancements:

- 🎭 **New Animations** – Add unique effects when cards are matched or flipped.
- ⏱ **Timer System** – Introduce a countdown timer for added challenge.
- 🎯 **Scoring System** – Reward points based on speed and accuracy.
- 🔥 **Beyond Level 8** – Expand the grid size to create extreme difficulty levels.

---

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch** for your feature.
3. **Make your changes** and commit them.
4. **Submit a pull request** with a description of your improvements.

We appreciate all contributions that help improve this project! 🎉

---


