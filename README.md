# Instagram Revenue Calculator

## Overview

The Instagram Revenue Calculator allows users to input their Instagram handle and instantly get an estimated revenue they could generate with a high-ticket offer. Users can either enter their Instagram handle or manually input basic data such as audience size and engagement rate.

## Features

1. **User Input Form**: Users can enter their Instagram handle or manually input follower count and engagement rate.
2. **Revenue Calculation**: The app calculates potential revenue using the formula:
   ```
   Revenue = Followers × Engagement Rate (%) × Conversion Rate (%) × High-Ticket Offer Price (€)
   ```
   - Default Values:
     - Conversion Rate: 3% (adjustable in the code).
     - High-Ticket Offer Price: €1500 (adjustable in the code).
3. **Result Display**: The result is displayed in a clean format, including a call-to-action.
4. **Responsive Design**: The application works seamlessly on both desktop and mobile devices.

## File Structure

```
/project-root  
│  
├── /css  
│   ├── styles.css (all styles go here)  
│  
├── /js  
│   ├── main.js (core functionality and calculations)  
│  
├── /assets  
│   ├── images/ (any images used)  
│  
├── index.html (main HTML file)  
├── README.md (this file)  
```

## Code Explanation

### 1. HTML (index.html)

The HTML file contains a form that allows users to input their Instagram handle or manually enter follower count and engagement rate. The results are displayed in a dedicated `div`.

### 2. CSS (css/styles.css)

The CSS styles create a clean and modern look, focusing on usability and responsiveness. The design uses a professional high-ticket aesthetic with colors like gold, black, and white.

### 3. JavaScript (js/main.js)

The JavaScript file handles form submission, calculates the revenue based on the provided formula, and dynamically updates the result section. It includes basic input validation to ensure that numbers are entered for manual inputs.

## Next Steps

- Enhance the application by implementing optional features, such as Instagram API integration and email collection.
- Test the application across different browsers and devices for responsiveness.

## How to Run the App

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.
3. Input your Instagram handle or follower data and click "Calculate Revenue" to see the results.

## Future Improvements

- Implement Instagram API integration for live data fetching.
- Add email collection functionality to send analysis results to users.

```
/project-root
│
├── /css
│ ├── styles.css (all styles go here)
│
├── /js
│ ├── main.js (core functionality and calculations)
│
├── /assets
│ ├── images/ (any images used)
│
├── index.html (main HTML file)
├── README.md (this file)
```

## Code Explanation

### 1. HTML (index.html)

The HTML file contains a form that allows users to input their Instagram handle or manually enter follower count and engagement rate. The results are displayed in a dedicated `div`.

### 2. CSS (css/styles.css)

The CSS styles create a clean and modern look, focusing on usability and responsiveness. The design uses a professional high-ticket aesthetic with colors like gold, black, and white.

### 3. JavaScript (js/main.js)

The JavaScript file handles form submission, calculates the revenue based on the provided formula, and dynamically updates the result section. It includes basic input validation to ensure that numbers are entered for manual inputs.

## Next Steps

- Enhance the application by implementing optional features, such as Instagram API integration and email collection.
- Test the application across different browsers and devices for responsiveness.

## How to Run the App

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.
3. Input your Instagram handle or follower data and click "Calculate Revenue" to see the results.

## Future Improvements

- Implement Instagram API integration for live data fetching.
- Add email collection functionality to send analysis results to users.