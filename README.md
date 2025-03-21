# Weather Dashboard

A modern and responsive weather dashboard built with Next.js that displays real-time weather information for Joinville / SC (Brazil), San Francisco / CA (USA) and Urubici / SC (Brazil).



## Features

- **Real-time Weather Data**
- OpenWeatherMap API integration
- Auto-updates every 10 minutes
- Current conditions, hourly, and daily forecasts
- Support for multiple cities (Joinville/BR, San Francisco/US, Urubici/BR)

- **Modern UI/UX**
- Responsive design for all devices
- Dark/Light theme with system detection
- Smooth animations and transitions
- Dynamic weather-based gradients

- **Accessibility**
- ARIA labels
- Semantic HTML
- Keyboard navigation
- Screen reader support



##  Technical Details

### Core Stack

- Next.js 14 (App Router)
- React 18 (Server Components)
- TypeScript
- Tailwind CSS
- Zustand (State Management)

### Development Tools

- ESLint
- PostCSS
- SWC
- Jest + React Testing Library

### Architecture

- Component-based structure
- Clean architecture principles
- Type-safe implementations
- Modular CSS with Tailwind
- Global state with Zustand

### Data Flow

- Real-time API integration
- Parallel data fetching
- Error handling
- Loading states
- Auto-refresh mechanism



## Installation

1. Clone the repository:

```bash
git clone https://github.com/clendson-goncalves/weather-dashboard-challenge.git
cd weather-dashboard-challenge
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local`:

```bash
# OpenWeather API Key
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

4. Available scripts:

```bash
npm run dev # Start development server
npm run build # Build for production
npm run start # Start production server
npm run lint # Run ESLint
```


  
## Testing

### Running Tests

```bash
npm test # Run tests once
npm test:watch # Run tests in watch mode
```

### Test Coverage

#### Components

- **WeatherCard**
- Location display
- Current temperature (25°C)
- Temperature ranges (20-30°C)
- Hourly forecast (5 intervals, 1-hour spacing)
- Daily forecast (5 days, 24-hour spacing)

- **Theme Toggle**
- Theme switching
- LocalStorage persistence
- Automatic system theme detection


#### Utilities

- Temperature color mapping
- Cold: ≤ 5°C
- Warm: 6-25°C
- Hot: > 25°C



## Project Structure

```
weather-dashboard/
├── __tests__/ # Test files
├── app/ # Next.js app router
├── components/ # React components
│ ├── ui/ # Reusable UI components
├── lib/ # Utilities and store
└── public/ # Static assets
```

