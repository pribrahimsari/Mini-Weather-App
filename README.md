# Mini Weather App
React + TypeScript + Vite application to refresh my basic React and ContextAPI knowledge.
Select a city in TR and see 5-day weather forecast.
- For more details task desc.: https://academy.patika.dev/courses/react/odev3

## Live Demo
Visit the link: [Mini Weather App by Vercel](https://mini-weather-app-nine.vercel.app/)

## Features
Created/Started via Vite's TypeScript + React minimal setup: `yarn create vite mini-weather-app --template react-ts`

## Libs
- Frontend Bundler: [Vite](https://vitejs.dev/)
- Frontend Lib: [React](https://react.dev/)
- API: [OpenWeather API](https://openweathermap.org/)
- UI : [MaterialUI v5](https://mui.com/)
- Linting Utility: [ESLint](https://eslint.org/)
- Code Formatter: [Prettier](https://prettier.io/)
- VCS: Git
- Deployment: [Vercel](https://vercel.com/)

## Test in local environment

- **Clone repo:**
```bash
git clone https://github.com/pribrahimsari/Mini-Weather-App.git
```

- **Install dependencies:**
```bash
yarn install
```

- **Create `.env.local` file at root:**
  - You can copy or rename `.env.local.example` file already available


- **Get Your [OpenWeatherMap API Key](https://openweathermap.org/) and paste it to your env file**
  - Final .env file should look like:
```.env
VITE_WEATHER_FORECEST_API_URL=https://api.openweathermap.org/data/2.5/forecast
VITE_OPENWEATHERMAP_API_KEY=<<YOUR_OPEN_WEATHER_MAP_API_KEY>>
```

- **Run:**
```bash
yarn dev
```



- **Visit the link on your favorite browser:** http://localhost:5173/
  - Note: Vite uses port `5173` port 
