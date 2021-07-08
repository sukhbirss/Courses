import styles from "./home.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import Courses from "../components/courses/Courses";


export default function Home() {
  return (
    <div className={styles.home}>
        <Sidebar />
        <Courses />
    </div>
  );
}
