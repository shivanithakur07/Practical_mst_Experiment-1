# Practical_mst_Experiment-1

# React Counter Application

# Project Description

This project is a simple React Counter Application built using React and Vite.
The application displays a number on the screen and allows the user to increment, decrement, and reset the value using buttons.

This project demonstrates basic React concepts such as functional components, state management using hooks, and event handling.

---

# Features

* Display a counter value
* Increment the value
* Decrement the value
* Reset the counter
* Dynamic UI updates using React state
* Styled user interface using CSS

---

# Technologies Used

* React
* Vite
* JavaScript
* CSS

---

# Folder Structure
src
 ├── components
 │     ├── Counter.jsx
 │     └── Counter.css
 ├── App.jsx
 └── main.jsx
 ----

# Explanation

main.jsx:
Entry point of the React application. It renders the App component.

App.jsx:
Main component that imports and displays the Counter component.

components/Counter.jsx
Contains the logic and UI for the counter.

components/Counter.css
Contains styling for the counter application.

---

# React Concepts Used

# Functional Components

The application uses React functional components to create reusable UI components.

# useState Hook

The useState hook is used to store and update the counter value.

Example concept:

* Initial value → 0
* Increment → count + 1
* Decrement → count - 1
* Reset → count = 0

When the state changes, React automatically **re-renders the component** and updates the UI.

# Event Handling

Button clicks trigger functions that update the state.

---

# How to Run the Project

1. Open the project folder in the terminal.

2. Install dependencies


npm install


3. Start the development server


npm run dev


4. Open the browser and go to


http://localhost:5173


---

# Possible Improvements

The application can be improved by adding:

* Minimum and maximum counter limits
* Step counter (increase by 5 or 10)
* Better UI design using Tailwind CSS or Bootstrap
* Component reusability
* Animation effects

---

# Learning Outcome

This project helps in understanding:

* React project structure
* React functional components
* useState hook
* Event handling
* Dynamic UI updates
* Component-based architecture

---

# Author
Shivani Thakur
