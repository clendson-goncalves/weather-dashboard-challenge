# Weather Dashboard

A modern, responsive weather dashboard built with Next.js that displays real-time weather information for Joinville / SC (Brazil), San Francisco / CA (USA) and Urubici / SC (Brazil).

## Features

- Real-time weather data from OpenWeatherMap API
- Automatic updates every 10 minutes
- Responsive design for all devices
- Dark/Light theme support and theme toggle
- Displays current conditions, hourly, and daily forecasts
- Smooth animations and transitions
- Accessible UI with ARIA labels

## Technical Stack

### Core Technologies
- Next.js 14 with App Router
- React 18 with Server Components
- TypeScript for type safety
- Tailwind CSS for styling
- Zustand for state management
- Lucide React for icons

### Development Tools & Standards
- ESLint for code linting
- PostCSS for CSS processing
- SWC for fast compilation
- TypeScript strict mode enabled

### Code Quality & Documentation
- JSDoc comments for documentation
- ARIA labels for accessibility
- Strict TypeScript configuration
- Component-based architecture
- Clean code practices

### UI/UX Features
- Tailwind CSS features:
  - Custom color schemes
  - Dark mode support
  - Responsive design utilities
  - Custom animations
  - Container queries
  - CSS variables for theming
- Modern UI components:
  - Responsive cards
  - Dynamic weather icons
  - Smooth transitions
  - Gradient backgrounds

### State Management & Data Fetching
- Zustand for global state
- Async/await for API calls
- Promise.all for parallel requests
- Error handling
- Loading states
- Auto-refresh mechanism

### Type System
- TypeScript interfaces for weather data
- Strict null checks
- Type-safe props
- Proper error types
- Module type declarations

### Project Organization
- Feature-based component structure
- Utility functions separation
- Clean architecture principles
- Modular CSS with Tailwind
- Consistent file naming

## Prerequisites

- Node.js 18+ 
- OpenWeatherMap API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
weather-dashboard/
├── app/                # Next.js app directory
├── components/         # React components
├── lib/               # Utilities and store
├── public/            # Static assets
└── ...config files
```

## License

MIT
