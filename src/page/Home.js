import styles from "./home.module.css";
import CourseList from "../components/courseList/CourseList";
import Courses from "../components/courses/Courses";


export default function Home() {
  return (
    <div className={styles.home}>
        <CourseList />
        <Courses />
    </div>
  );
}
