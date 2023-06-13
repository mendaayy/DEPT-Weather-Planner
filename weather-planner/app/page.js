'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/page.module.css';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

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
            <h2>
              25˚
            </h2>
            <div className={styles.weatherDesc}>
              <p>It's 25°C here which is extremely cold for the Netherlands.</p>
              <p>Very freezing, unusual even for the Netherlands. Stay warm indoors!.</p>
            </div>
          </div>

          <div className={styles.activity}>
            <h2>
              Some things you could do:
            </h2>
            <div className={styles.activityInfo}>
              <div className={styles.wrapper}>
                <Image
                  src="/pic.svg"
                  alt="activity img"
                  className={styles.activityImg}
                  width={109}
                  height={109}
                  priority
                />
              </div>
              <div className={styles.activityDesc}>
                <p>Swimming</p>
                <p>Very freezing, unusual even for the Netherlands. Stay warm indoors!.</p>
              </div>
            </div>
            <div className={styles.activityInfo}>
              <div className={styles.wrapper}>
                <Image
                  src="/pic.svg"
                  alt="activity img"
                  className={styles.activityImg}
                  width={109}
                  height={109}
                  priority
                />
              </div>
              <div className={styles.activityDesc}>
                <p>Swimming</p>
                <p>Very freezing, unusual even for the Netherlands. Stay warm indoors!.</p>
              </div>
            </div>

            <h2>
              Some things you should not do:
            </h2>
            <div className={styles.activityInfo}>
              <div className={styles.wrapper}>
                <Image
                  src="/pic.svg"
                  alt="activity img"
                  className={styles.activityImg}
                  width={109}
                  height={109}
                  priority
                />
              </div>
              <div className={styles.activityDesc}>
                <p>Swimming</p>
                <p>Very freezing, unusual even for the Netherlands. Stay warm indoors!.</p>
              </div>
            </div>
            <div className={styles.activityInfo}>
              <div className={styles.wrapper}>
                <Image
                  src="/pic.svg"
                  alt="activity img"
                  className={styles.activityImg}
                  width={109}
                  height={109}
                  priority
                />
              </div>
              <div className={styles.activityDesc}>
                <p>Swimming</p>
                <p>Very freezing, unusual even for the Netherlands. Stay warm indoors!.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
