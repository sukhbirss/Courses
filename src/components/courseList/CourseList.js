import styles from "./courseList.module.css";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
const css = { textDecorationLine: "line-through", textDecorationColor: "red" };

export default function CourseList() {
  const [state, setState] = useState("0");
  const history = useHistory();

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar} >
        <h1>Lorem Ipsum</h1>
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
          onClick={() =>  {history.push('/2'); setState("3")} }
          style={state === "3" ? css : null}
        >
          Setting
        </p>
        <p
          onClick={() =>  {history.push('/2'); setState("4")} }
          style={state === "4" ? css : null}
        >
          Night Mode
        </p>
        <p onClick={() => setState("Book")} style={state === "Book" ? css : null}>
          Book
        </p>
        <button>cart</button>
      </div>
    </div>
  );
}
