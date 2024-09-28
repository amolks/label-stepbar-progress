# Multi-Step Progress Tracker

This project is a simple multi-step progress bar built with HTML, CSS, and JavaScript. It features different styles of progress bars where users can visualize their progress through various steps with labels placed either above or below the progress indicator.

## Features

- **Four Progress Bar Layouts**:
  1. Labels displayed below the progress bar.
  2. Labels displayed above the progress bar.
  3. Labels with step numbers displayed above the progress bar.
  4. Labels with step numbers displayed below the progress bar.
- **Customizable Labels**: Each progress step is labeled for easy reference and user guidance.
- **Custom Data Attributes for Configuration**:
  - Set the default active step (data-default-step).
  - Customize the position of labels (data-label-position) values (top or bottom) .
- **Animated Progress**: Smooth transitions with CSS to show progress changes dynamically.

## Demo

You can see the live demo of the project by opening the `index.html` file in your browser.

## Project Structure

```bash
├── index.html               # Main HTML structure for the progress bar demo
├── styles.css               # CSS file for styling the progress bars and layout
├── stepbar-progress.js      # JavaScript file to handle progress bar behavior (if required)
└── README.md                # Project documentation
