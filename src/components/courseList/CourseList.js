import styles from "./courseList.module.css";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const css = { color:"green" };

export default function CourseList() {
  const {id} = useParams();
  const [state, setState] = useState(id);
  const history = useHistory();

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar} >
        <h1>Course list</h1>
        <p
          onClick={() =>  {history.push('/0'); setState("0")} }

          style={state === "0" ? css : null}
        >
          React
        </p>
        <p
          onClick={() =>  {history.push('/1'); setState("1")} }
          

          style={state === "1" ? css : null}
        >
          Nodejs
        </p>
        <p
          onClick={() =>  {history.push('/2'); setState("2")} }
          style={state === "2" ? css : null}
        >
          Python
        </p>
        <p
          onClick={() =>  {history.push('/3'); setState("3")} }
          style={state === "3" ? css : null}
        >
          Hacking
        </p>
        <p
          onClick={() =>  {history.push('/2'); setState("4")} }
          style={state === "4" ? css : null}
        >
          Django
        </p>
        <p onClick={() =>  {history.push('/1'); setState("5")} } style={state === "5" ? css : null}>
          Mixed
        </p>
        <button><a href="https://github.com/sukhbirss/Courses"  target="_blank">Github</a></button>
      </div>
    </div>
  );
}
