import Image from 'next/image'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <Image
              src="/dept.svg"
              alt="DEPT Logo"
              className={styles.deptLogo}
              width={100}
              height={24}
              priority
          />
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            DEPT<span>&#9415;</span> weather planner
          </h2>
          <p>Picture this: an application that doesn't just tell you the weather, but also helps you plan your activities around it. 
            Imagine knowing exactly the perfect day to plan that hike, or when to avoid the outdoor concert due to an unexpected shower. 
            That's exactly what the Dept Weather Planner offers you.

            Built with cutting-edge technologies, our weather planner brings you accurate, real-time weather data with a slick and user-friendly 
            interface. But it's not just a weather app; it's an intuitive daily planner that syncs with the weather. With a range of activities to 
            choose from, it suggests the best options based on current and forecasted weather conditions. 

            Read less</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn 
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>
      </div>
    </main>
  )
}
