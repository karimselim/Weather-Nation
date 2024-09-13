import { useRef, useState, lazy, Suspense } from "react";
import styles from "../styles/mainPage.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { WeatherApiResponse, WeatherInfo } from "..";
import { motion } from "framer-motion";
import { showing, logoVariant } from "../variants";

// Lazy load the components
const WeatherDetails = lazy(() => import("./WeatherDetails"));
const CityDetails = lazy(() => import("./CityDetails"));

const MainPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  function timestampToDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const handleInputChange = async (city: string) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data: WeatherApiResponse = await response.json();

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      setWeatherInfo({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        date: timestampToDate(data.dt),
        description: data.weather[0].description,
        max: data.main.temp_max,
        min: data.main.temp_min,
        feels: data.main.feels_like,
      });
    } catch (error) {
      console.error("Error fetching weather data", error);
      setWeatherInfo(null);
    }
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = inputRef.current?.value || "";
    if (city === "") {
      alert("Enter city name");
      return;
    }
    handleInputChange(city);
    if (inputRef.current) inputRef.current.value = "";
  };

  const iconClickHandler = () => {
    const city = inputRef.current?.value || "";
    if (city === "") {
      alert("Enter city name");
      return;
    }
    handleInputChange(city);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <>
      <main className={`flex justify-center items-center ${styles.main}`}>
        <motion.img
          src={logo}
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          className={`absolute ${styles.logo}`}
          alt=""
        />
        {!weatherInfo && (
          <form onSubmit={submitFormHandler}>
            <motion.h1
              variants={showing}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`white ${styles.h1}`}
            >
              Please Enter the city name
            </motion.h1>
            <motion.div
              variants={showing}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`relative ${styles.holder}`}
            >
              <input
                type="text"
                className="white bg-transparent w-full"
                ref={inputRef}
              />
              <div
                className={`absolute flex items-center justify-center ${styles.iconHolder}`}
                onClick={iconClickHandler}
              >
                <FaMagnifyingGlass className={`white ${styles.glass}`} />
              </div>
            </motion.div>
          </form>
        )}
      </main>
      {weatherInfo && (
        <Suspense fallback={<div>Loading...</div>}>
          <CityDetails
            temprature={weatherInfo.temperature}
            location={weatherInfo.location}
            description={weatherInfo.description}
            date={weatherInfo.date}
          />
          <WeatherDetails
            min={weatherInfo.min}
            max={weatherInfo.max}
            feels={weatherInfo.feels}
            wind={weatherInfo.windSpeed}
            humidity={weatherInfo.humidity}
            onInputChange={handleInputChange}
          />
        </Suspense>
      )}
    </>
  );
};

export default MainPage;
