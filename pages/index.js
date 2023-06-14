'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/page.module.css';
import Link from 'next/link';

export default function Home() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [unavailableActivities, setUnavailableActivities] = useState([]);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  
  // Fetch current weather data and activities
  useEffect(() => {
    fetch('http://localhost:8890')
      .then((response) => response.json())
      .then((weatherData) => {
        console.log(weatherData)
        setWeatherInfo(weatherData);

        // Fetch activities data
        fetch('http://localhost:8891')
          .then((response) => response.json())
          .then((activitiesData) => {
            console.log(activitiesData);

            if (weatherData && weatherData.temperature) {
              const { temp } = weatherData.temperature;
              const celsius = getTemperatureInCelsius(temp);

              // Filter activities based on temperature
              const filteredActivities = activitiesData.activities.filter((activity) => {
                const { minTemp, maxTemp } = activity;
                if (minTemp === null && maxTemp === null) {
                  return true; // Temperature doesn't matter
                }
                return celsius >= minTemp && celsius <= maxTemp;
              });

              console.log("Could do", filteredActivities);
              setFilteredActivities(filteredActivities);

              const unavailableActivities = activitiesData.activities.filter((activity) => {
                const { minTemp, maxTemp } = activity;
                if (minTemp === null && maxTemp === null) {
                  return false; // Temperature doesn't matter for this activity
                }
                return celsius < minTemp || celsius > maxTemp;
              });

              console.log("Should not do", unavailableActivities);
              setUnavailableActivities(unavailableActivities);
            }
          })
          .catch((error) => {
            console.error('Error fetching activities data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  
  // Change temp to Celsius
  const temperature = weatherInfo?.temperature;
  const metric = temperature?.metric;

  const getTemperatureInCelsius = (temp) => {
    if (metric === 'FAHRENHEIT') {
      return Math.round(((temp - 32) * 5) / 9);
    }
    return temp;
  };

  // Get corresponding weather description
  const getWeatherDescription = (temp) => {
    const celsius = getTemperatureInCelsius(temp);
    let title = '';
    let description = '';

    if (weatherInfo) {
      const weatherDescriptions = weatherInfo.weatherInfo;

      for (const weatherDesc of weatherDescriptions) {
        const { minTemp, maxTemp } = weatherDesc;

        if (
          (minTemp === null || celsius >= minTemp) &&
          (maxTemp === null || celsius <= maxTemp)
        ) {
          title = weatherDesc.title.replace('{{ CELCIUS }}', celsius);
          description = weatherDesc.description;
          break;
        }
      }
    }

    return { title, description };
  };

  const { title, description } = weatherInfo ? getWeatherDescription(temperature.temp) : {};

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.deptInfo}>
              <Image
                  src="/dept.svg"
                  alt="DEPT Logo"
                  className={styles.deptLogo}
                  width={100}
                  height={24}
                  priority
              />

              <h2>
                DEPT<span>&#9415;</span> weather planner
              </h2>
              <p>Picture this: an application that doesn't just tell you the weather, but also helps you plan your activities around it. 
                Imagine knowing exactly the perfect day to plan that hike, or when to avoid the outdoor concert due to an unexpected shower. 
                That's exactly what the Dept Weather Planner offers you.
                <br></br>
                <br></br>
                {showMore ? (
                  <>
                    Built with cutting-edge technologies, our weather planner brings you accurate, real-time weather data with a slick and user-friendly
                    interface. But it's not just a weather app; it's an intuitive daily planner that syncs with the weather. With a range of activities to
                    choose from, it suggests the best options based on current and forecasted weather conditions.
                    <br></br>
                    <br></br>
                  </>
                ) : null}
                <button onClick={handleToggle}>
                  {showMore ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.weatherInfo}>
            {weatherInfo ? (
              <>
                <h2>{getTemperatureInCelsius(temperature.temp)}&deg;</h2>
                <div className={styles.weatherDesc}>
                  <p>{title}</p>
                  <p>{description}</p>
                </div>
              </>
            ) : (
              <p>Loading weather information...</p>
            )}
          </div>

          <div className={styles.activity}>
            <h2>
              Some things you could do:
            </h2>
            {filteredActivities.map((activity, index) => (
              <Link href={activity.url} key={index} className={styles.activityInfo}>
                <div className={styles.wrapper}>
                  <Image
                    src={activity.imageUrl}
                    alt="activity img"
                    className={styles.activityImg}
                    width={109}
                    height={109}
                    priority
                  />
                </div>
                <div className={styles.activityDesc}>
                  <p>{activity.title}</p>
                  <p>{activity.description}</p>
                </div>
              </Link>
            ))}

            <h2>
              Some things you should not do:
            </h2>
            {unavailableActivities.map((activity, index) => (
              <Link href={activity.url} key={index} className={styles.activityInfo}>
                <div className={styles.wrapper}>
                  <Image
                    src={activity.imageUrl}
                    alt="activity img"
                    className={styles.activityImg}
                    width={109}
                    height={109}
                    priority
                  />
                </div>
                <div className={styles.activityDesc}>
                  <p>{activity.title}</p>
                  <p>{activity.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
