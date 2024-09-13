import styles from "../styles/weatherDetails.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaWind } from "react-icons/fa";
import { useRef } from "react";
import { WeatherDetailsProps } from "..";
import { motion } from "framer-motion";
import { cityShowing } from "../variants";

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  onInputChange,
  max,
  min,
  humidity,
  feels,
  wind,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputRef.current) {
      onInputChange(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const logging = () => {
    if (inputRef.current) {
      onInputChange(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <motion.aside
      variants={cityShowing}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`absolute white ${styles.aside}`}
    >
      <div className={`relative ${styles.inputHolder}`}>
        <input
          type="text"
          placeholder="Search Location..."
          className="bg-transparent white w-full"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <FaMagnifyingGlass
          className={`absolute white ${styles.glass}`}
          onClick={logging}
        />
      </div>
      <p>Weather Details...</p>
      <ul className="flex">
        <li className="flex justify-between">
          <span>Temp max</span>
          <div>
            <span>{max}° </span>
            <FaTemperatureArrowUp className={`${styles.firstIcon}`} />
          </div>
        </li>
        <li className="flex justify-between">
          <span>Temp min</span>
          <div>
            <span>{min}° </span>
            <FaTemperatureArrowDown className={`${styles.secondIcon}`} />
          </div>
        </li>
        <li className="flex justify-between">
          <span>Feels like</span>
          <div>
            <span>{feels}° </span>
            <TiWeatherCloudy />
          </div>
        </li>
        <li className="flex justify-between">
          <span>Humidity</span>
          <div>
            <span>{humidity}% </span>
            <FaDroplet />
          </div>
        </li>
        <li className="flex justify-between">
          <span>Wind</span>
          <div>
            <span>{wind}km/h </span>
            <FaWind />
          </div>
        </li>
      </ul>
    </motion.aside>
  );
};

export default WeatherDetails;
