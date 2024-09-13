import styles from "../styles/cityDetails.module.css";
import { CityWeatherInfo } from "..";
import { cityShowing } from "../variants";
import { motion } from "framer-motion";

const CityDetails = ({
  temprature,
  location,
  description,
  date,
}: CityWeatherInfo) => {
  return (
    <motion.section
      variants={cityShowing}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`absolute white flex items-center ${styles.section}`}
    >
      <h2>{temprature}°</h2>
      <div>
        <h3>{location}</h3>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </motion.section>
  );
};

export default CityDetails;
