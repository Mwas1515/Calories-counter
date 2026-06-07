# Calorie Counter Application

A clean, responsive web application that helps users track their daily calorie intake. This project demonstrates core front-end development concepts including DOM manipulation, state management, event handling, and data persistence using the browser's Local Storage API.

## Overview

The Calorie Counter Application allows users to record food items along with their calorie values, monitor their daily consumption, and manage their calorie log efficiently. All data is stored locally in the browser, ensuring that information remains available even after the page is refreshed or the browser is restarted.

## Features

### Add Food Items

* Enter a food name and its calorie count.
* Instantly add entries to the calorie tracking list.

### Dynamic User Interface

* The application updates automatically whenever items are added or removed.
* No page refresh is required.

###  Persistent Data Storage

* Uses the browser's Local Storage API.
* Saved entries remain available across browser sessions.

###  Remove Individual Items

* Delete specific food entries from the list whenever needed.

###  Clear All Entries

* Reset the entire calorie log with a single click.

###  Responsive Design

* Works seamlessly across desktop, tablet, and mobile devices.

## Technologies Used

| Technology        | Purpose                                   |
| ----------------- | ----------------------------------------- |
| HTML5             | Application structure and semantic markup |
| CSS3              | Styling, layout, and responsive design    |
| JavaScript (ES6+) | Application logic and interactivity       |
| Local Storage API | Data persistence between sessions         |

## How to Run the Project

### Method 1: Download ZIP

1. Download the project files.
2. Extract the ZIP folder.
3. Open `index.html` in any modern web browser.

### Method 2: Clone Repository

```bash
git clone https://github.com/Mwas1515/Calories-counter.git
```

Navigate to the project folder:

```bash
cd Calorie-counter
```

Open `index.html` in your browser.

## Usage

1. Enter a food item name.
2. Enter the calorie value.
3. Click **Add Item**.
4. View the updated calorie list instantly.
5. Remove individual entries if needed.
6. Click **Clear All** to reset the tracker.

## Project Structure

```:.
    index.html
    README.md
    script.js
```

## Key Concepts Demonstrated

* DOM Manipulation
* Event Handling
* Form Validation
* Array Operations
* State Management
* Local Storage Integration
* Responsive Web Design

## Local Storage Implementation

The application stores calorie entries using the browser's Local Storage API.

### Data Flow

1. User adds a food item.
2. Item is stored in a JavaScript array.
3. Array is saved to Local Storage.
4. On page load, saved data is retrieved and displayed automatically.
5. Any updates are synchronized with Local Storage.

##  Learning Objectives

This project was built to practice:

* Creating interactive web applications
* Managing application state with JavaScript
* Persisting user data in the browser
* Working with arrays and objects
* Building responsive user interfaces

##  Future Improvements

* Add an Edit feature to modify existing entries
* Implement a daily calorie goal tracker
* Add a visual progress bar for goal tracking
* Include nutritional information (protein, carbs, fats)
* Integrate a Nutrition API for automatic calorie lookup
* Add date-based tracking and history
* Enable export of calorie data to CSV or PDF

##  Contributing

Contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

## License

This project is open-source and available under the MIT License.

##  Author

Denis Mwangi 

deniswambui6@gmail.com

---

If you found this project useful, consider giving it a star on GitHub!
