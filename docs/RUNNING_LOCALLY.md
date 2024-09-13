Running the Weather Application Locally
Follow these steps to run the project on your local machine.

Prerequisites
Before you begin, make sure you have the following installed:

• Node.js (version 14.x or higher)
• npm (Node Package Manager) or yarn
• An API key from a weather API provider (e.g., OpenWeatherMap)

Steps

1. Clone the repository from GitHub by navigating to your terminal and running the following: git clone https://github.com/yourusername/weather-app.git && cd weather-app

2. Install the dependencies for the project by running: npm install Or if you prefer yarn: yarn

3. Create a file called .env in the root of your project and add your API key in this format: VITE_APP_ID=your_api_key_here
   Replace your_api_key_here with the actual API key from the weather API provider.
   u will find the .env file on gitub

4. Once the .env file is set up, start the development server using: npx vite
   Or if you are using yarn:
   yarn dev

5. Open your browser and go to http://localhost:5173/ to view the application.

Additional Information

• This project uses vite as the build tool for faster development.
• Dependencies include framer-motion, react, and react-icons.
• Avoid committing the .env file to your version control system as it contains sensitive API information.
