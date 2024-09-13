export interface WeatherApiResponse {
  cod: number;
  weather: { description: string }[];
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
  name: string;
  dt: number;
}

export interface WeatherInfo {
  humidity: number;
  windSpeed: number;
  temperature: number;
  location: string;
  date: string;
  description: string;
  max: number;
  min: number;
  feels: number;
}

export interface CityWeatherInfo {
  temprature: number;
  location: string;
  date: string;
  description: string;
}

export interface WeatherDetailsProps {
  onInputChange: (city: string) => void;
  max: number;
  min: number;
  humidity: number;
  feels: number;
  wind: number;
}
