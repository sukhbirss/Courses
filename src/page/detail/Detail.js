import styles from "./detail.module.css";

export default function Detail(){
  return (
    <>
      <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.header_content}>
              <div className={styles.content_left}>
                <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1>
                <p>Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!</p>
                <p>Created by , </p>
                <p>Last updated 6/2021 English English, French [Auto]</p> 
                <div>
                  <button className={styles.btn}>wishlist</button>
                  <button className={styles.btn}>share</button>
                  <button className={styles.btn}>gift this course</button>
                </div>
              </div>
              <div className={styles.content_right}>
                <div className={styles.box_video}></div>
                <div className={styles.box_content}>
                    <h1>₹8,640</h1>
                    <button>Add to cart</button>
                    <button>Buy Now</button>

                    <p>47.5 hours on-demand video</p>
                    <p>44 articles</p>
                    <p>92 downloadable resources</p>
                    <p>Full lifetime access</p>
                    <p>Access on mobile and TV</p>
                    <p>Assignments</p>
                    <p>Certificate of completion</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className={styles.container}>
          <h2>What you'll learn </h2>
      
        <div className={styles.info}>
          <p>Build powerful, fast, user-friendly and reactive web apps</p>
          <p>Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now</p>
          <p>Provide amazing user experiences by leveraging the power of JavaScript with ease</p>
          <p>Learn all about React Hooks and React Components</p>
        </div>
      </div>
    </>
  )
}