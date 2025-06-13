# Space Explorer

A web application that allows users to explore space-related content using NASA's Astronomy Picture of the Day (APOD) API.

## Features

- View daily astronomy pictures from NASA
- Browse historical astronomy pictures by date
- Get detailed information about each picture including title, description, and copyright information
- Built with Angular and integrated with NASA's APOD API

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your NASA API key:
   ```bash
   API_KEY=your_nasa_api_key_here
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200/`

## Project Structure

- `src/app/core/config/` - Configuration services
- `src/app/core/services/` - Core service implementations (including NASA API integration)
- `src/environments/` - Environment-specific configuration files

## Development

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code Generation

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## API Integration

The application uses NASA's APOD API to fetch daily astronomy pictures. Make sure to obtain an API key from NASA before running the application.

## Environment Configuration

The project supports different environments through the environment files:
- `environment.ts` - Development environment
- `environment.prod.ts` - Production environment

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- NASA APOD API (https://api.nasa.gov/)
- Angular CLI (https://github.com/angular/angular-cli)

## Contributing

arkarwin156439@gmail.com