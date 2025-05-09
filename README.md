# Weather App

## Overview

Weather App is a cross-platform application that provides real-time weather information and forecasts. Built with modern web technologies, it runs seamlessly on web browsers, Android, and iOS devices.

![Weather App Screenshot](https://clecardona.eu/assets/lumi-weather/00.jpg)

## Features

- **Real-time Weather Data**: Current conditions and temperature
- **Hourly & Daily Forecasts**: Plan ahead with accurate forecasts
- **Location-based Weather**: Automatic location detection or manual search
- **Multiple Locations**: Save and track weather for different locations
- **Weather Maps**: Visual representation of weather patterns
- **Customizable Units**: Switch between metric and imperial units
- **Cross-Platform Support**: Available on web, Android, and iOS

## Technologies

- **Frontend**: React with TypeScript
- **UI Framework**: Ionic Framework
- **Build Tools**: Vite
- **Mobile Deployment**: Capacitor

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- For mobile development:
  - Android Studio (for Android)
  - Xcode (for iOS)

### Setup

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Create a `.env` file based on the `.env.example` template
   - Add your weather API key (from OpenWeatherMap, AccuWeather, etc.)

## Development

### Web Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

### Mobile Development

#### Android

```bash
npm run ionic:build
npm run ionic:serve
# For production build
npm run ionic:build
```

#### iOS

```bash
npm run ionic:build
# Then open the project in Xcode from the 'ios' folder
```

## Building for Production

### Web

```bash
npm run build
# or
yarn build
```

### Android

```bash
npm run build
npx cap sync android
npx cap open android
```

### iOS

```bash
npm run build
npx cap sync ios
npx cap open ios
```

## Project Structure

```
weather-app/
├── android/            # Android specific files
├── dist/               # Build output
├── node_modules/       # Dependencies
├── public/             # Static assets
├── resources/          # App resources (icons, splash screens)
├── src/                # Source code
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── mocks/          # Mock data for testing
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.css         # App-wide styles
│   ├── App.tsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── .env                # Environment variables
├── .eslintrc.js        # ESLint configuration
├── capacitor.config.ts # Capacitor configuration
├── ionic.config.json   # Ionic configuration
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Weather data provided by [weatherapi.com](https://www.weatherapi.com/)
- Icons from [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Ionic Framework](https://ionicframework.com/)
- [React](https://reactjs.org/)
- [Capacitor](https://capacitorjs.com/)
