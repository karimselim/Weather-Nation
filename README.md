# Weather Watch - React Web Application

## Overview

The **Weather Watch** web application provides real-time weather information based on a user's city input, leveraging modern web technologies for a responsive and dynamic user experience.

## Features

- **City Search Functionality**: Users can input the name of any city and get the current weather details.
- **Real-Time Data**: Weather information is pulled in real-time using the OpenWeather API.
- **Responsive Design**: Optimized for mobile and desktop views.
- **Animations**: Integrated animations for UI transitions using Framer Motion.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript to improve code quality.
- **Vite**: Build tool for faster development.
- **Framer Motion**: Library to create smooth animations and transitions.
- **ESLint**: Tool to enforce consistent coding style and prevent errors.

## Installation & Setup

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/karimselim/Weather-Watch.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Weather-Watch
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```bash
   VITE_APP_ID=911d8bd73bcab65312001ea52ca953ed
   ```

## Project Structure

```
src/
  components/        # Reusable React components
  assets/            # Static assets such as images
  styles/            # Global and component-specific styles
  ...
```

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request.

## Performance Insights

Here are some performance insights captured during development:

## License

This project is licensed under the MIT License.
